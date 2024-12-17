import requests
from bs4 import BeautifulSoup

def fetch_news_to_txt(url, output_file):

    try:
        # 뉴스 페이지 요청
        response = requests.get(url)
        response.raise_for_status()  # 요청이 실패한 경우 예외 발생
        
        # BeautifulSoup을 이용한 HTML 파싱
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 뉴스 본문을 포함한 태그를 찾기
        content = soup.find('div', {'id': 'articleBodyContents'})
        
        # 만약 위와 같은 ID로 본문을 못 찾으면, 다른 방법으로 시도
        if not content:
            content = soup.find('div', {'class': 'newsct_article'})  # 다른 클래스 시도
        
        if content:
            # 본문 내용 가져오기
            text = content.get_text(separator='\n', strip=True)
            
            # 텍스트 파일에 본문 추가
            with open(output_file, 'a', encoding='utf-8') as file:
                file.write(text + "\n\n")  # 본문 끝에 두 줄을 추가하여 구분
            
            print(f"뉴스 본문이 '{output_file}'에 성공적으로 추가되었습니다.")
        else:
            print(f"본문을 찾을 수 없습니다: {url}")
    
    except requests.exceptions.RequestException as e:
        print(f"HTTP 요청 오류 ({url}): {e}")
    except Exception as e:
        print(f"오류 발생 ({url}): {e}")

def crawl_from_links(input_file, output_file):

    try:
        with open(input_file, 'r', encoding='utf-8') as file:
            links = file.readlines()
        
        for url in links:
            url = url.strip()  # 공백 제거
            if url:  # 빈 줄이 있을 수 있으므로 건너뛰기
                fetch_news_to_txt(url, output_file)
    except Exception as e:
        print(f"파일을 읽는 중 오류 발생: {e}")

input_file = "news_links.txt"
output_file = "news_data.txt" 

crawl_from_links(input_file, output_file)