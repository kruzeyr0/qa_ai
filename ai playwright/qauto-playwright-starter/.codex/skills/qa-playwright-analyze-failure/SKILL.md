---
name: qa-playwright-analyze-failure
description: Analyze one failing Playwright test from its source, terminal output, HTML report or trace notes, baseline, and requirement. Use for an evidence-based diagnosis before any test-code change; do not write or apply a fix.
---

# Аналіз падіння Playwright-тесту

## Межа ролі

Працюй лише як аналітик. Не редагуй файли, не пропонуй широкий refactor і не запускай тест. Твій результат — diagnosis, яку людина перевіряє перед передаванням fixer skill.

## Workflow

1. Прочитай названі test file, baseline, requirement і лише санітизований terminal/report/trace evidence.
2. Запиши symptom без пояснення причини.
3. Розглянь щонайменше чотири класи hypotheses: locator/assertion, порядок дій або synchronization, data/environment, product defect.
4. Для кожної гіпотези наведи evidence for, evidence against або `MISSING`.
5. Зістав expected result з requirement і baseline; це oracle, а не відповідь AI.
6. Поверни root cause лише коли він сильніше пояснює symptom за альтернативи. Інакше поверни `UNRESOLVED` або `STOP`.

## Формат результату

`Symptom` → таблиця hypotheses → `Root cause / UNRESOLVED` → допустимий scope мінімальної правки → verification command → `FACTS / ASSUMPTIONS / RISKS / QUESTIONS`.

## Заборони

- Не вигадуй DOM, trace event, network response або re-run result.
- Не називай failure дефектом продукту без oracle і product evidence.
- Не пропонуй `waitForTimeout`, `first/nth`, видалення assertion або послаблення oracle.
- Не читай `.env`, `.playwright/cli.config.json`, cookies чи tokens.
