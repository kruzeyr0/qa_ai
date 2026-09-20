---
name: qa-playwright-write-test
description: Create one bounded Playwright Test from an approved specification, requirement, and verified UI locators. Use after human approval of the spec; show a diff and wait for approval before running the test.
---

# Написання Playwright-тесту

## Межа ролі

Створюй один прямо названий test file за погодженим spec. Не редагуй baseline, config, product code або залежності.

## Workflow

1. Прочитай `AGENTS.md`, названі requirement/spec/baseline файли й погоджені locator evidence.
2. Якщо локатори ще не підтверджені, після `APPROVE CLI INSPECTION` використай Playwright CLI з наявним config; не використовуй Browser connector.
3. Створи один незалежний TypeScript-тест з role, accessible name, label або погодженим test id.
4. Покажи unified diff, назви assertions і точну command для одного test file.
5. Чекай `APPROVE RUN`; лише після нього запускай тест і повертай actual output або blocker.

## Заборони

- Не вигадуй locator, expected result або `passed`.
- Не додавай `waitForTimeout`, довгий CSS/XPath, `.first()`/`.nth()` без доказу.
- Не змінюй config, dependencies, baseline, product або scope сценарію.
- Не виводь secrets, `.env`, cookies або config credentials.
