export const tool={
  "category": "유체역학",
  "category_en": "Fluid mechanics",
  "id": "E134",
  "slug": "eng-cavitation-number",
  "title": "캐비테이션수 계산기",
  "title_en": "Cavitation Number Calculator",
  "fields": [
    {
      "key": "p",
      "label": "기준 위치 절대압",
      "label_en": "Reference absolute pressure",
      "dimension": "pressure",
      "example": 101325,
      "constraint": "positive",
      "display_unit": "kPa",
      "display_value": "101.325"
    },
    {
      "key": "pv",
      "label": "해당 온도의 포화 증기압",
      "label_en": "Saturation vapor pressure at the stated temperature",
      "dimension": "pressure",
      "example": 2339,
      "constraint": "nonnegative",
      "display_unit": "kPa",
      "display_value": "2.339"
    },
    {
      "key": "rho",
      "label": "액체 밀도",
      "label_en": "Liquid density",
      "dimension": "density",
      "example": 998.2,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "998.20000000000005"
    },
    {
      "key": "v",
      "label": "기준 위치 유속",
      "label_en": "Reference speed",
      "dimension": "speed",
      "example": 10,
      "constraint": "positive",
      "display_unit": "ms",
      "display_value": "10"
    }
  ],
  "result_label": "캐비테이션수 σc",
  "result_label_en": "Cavitation number σc",
  "result_dimension": "ratio",
  "formula": "σc = (pabs − pv) / (ρV²/2)",
  "purpose": "절대압과 포화 증기압 사이의 여유를 동압으로 나눈 캐비테이션 지표를 계산합니다.",
  "purpose_en": "Calculate a cavitation index by dividing the margin between reference absolute pressure and saturation vapor pressure by dynamic pressure.",
  "assumptions": "압력은 게이지압이 아닌 절대압이며, 증기압은 액체의 해당 온도 값입니다. 기준 절대압은 증기압 이상인 단상 액체 기준입니다. 발생 임계값은 형상·거칠기·기포핵·측정 위치에 따라 달라집니다. 이 수치 하나로 캐비테이션 발생이나 무발생을 단정하지 않습니다.",
  "assumptions_en": "Required: absolute pressure, vapor pressure for the liquid temperature, and a single-phase reference liquid with reference pressure at least vapor pressure. Onset depends on geometry, roughness, nuclei and reference location. Excluded: declaring cavitation onset or absence from this index alone.",
  "sources": [
    {
      "label": "USBR · Cavitation Damage Induced Failure of Spillways, Eq. F-3-1",
      "url": "https://www.usbr.gov/ssle/damsafety/risk/BestPractices/Chapters/F3-CavitationDamageInducedFailureOfSpillways.pdf"
    }
  ],
  "condition": "절대압·동일 온도 증기압과 단상 기준의 적용 범위를 확인했습니다.",
  "condition_en": "I confirmed absolute pressure, vapor pressure at the same temperature and the single-phase reference scope.",
  "site": "https://nanalab.kr/eng-cavitation-number/",
  "repository": "https://github.com/NaNaCompany/eng-cavitation-number",
  "groups": [],
  "output_unit": "1"
};
