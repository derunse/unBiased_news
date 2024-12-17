import re
import pandas as pd

def split_sentences(input_file, output_file):

    try:
        # 입력 파일 읽기
        with open(input_file, 'r', encoding='utf-8') as file:
            text = file.read()

        # 문장 분리: 마침표, 느낌표, 물음표 기준
        sentences = re.split(r'(?<=[.?!])\s+', text)

        # 빈 문장 제거 및 양쪽 공백 제거
        sentences = [sentence.strip() for sentence in sentences if sentence.strip()]

        # 결과 저장
        df = pd.DataFrame(sentences, columns=["Sentences"])
        df.to_excel(output_file, index=False, engine='openpyxl')
        
        print(f"엑셀 파일이 '{output_file}'로 성공적으로 저장되었습니다.")
    except Exception as e:
        print(f"오류 발생: {e}")

input_file = "news_data.txt"  
output_file = "news_data.xlsx"

split_sentences(input_file, output_file)