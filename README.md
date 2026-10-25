# 캐비테이션수 계산기

절대압과 포화 증기압 사이의 여유를 동압으로 나눈 캐비테이션 지표를 계산합니다.

- ID: E134
- App: https://nanalab.kr/eng-cavitation-number/
- Repository: https://github.com/NaNaCompany/eng-cavitation-number
- Formula: σc = (pabs − pv) / (ρV²/2)

## Model and data

압력은 게이지압이 아닌 절대압이며, 증기압은 액체의 해당 온도 값입니다. 기준 절대압은 증기압 이상인 단상 액체 기준입니다. 발생 임계값은 형상·거칠기·기포핵·측정 위치에 따라 달라집니다. 이 수치 하나로 캐비테이션 발생이나 무발생을 단정하지 않습니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
