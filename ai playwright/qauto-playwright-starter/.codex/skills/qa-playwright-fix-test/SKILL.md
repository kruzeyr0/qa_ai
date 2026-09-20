---
name: qa-playwright-fix-test
description: Propose and apply one minimal Playwright test correction after an evidence-based diagnosis is approved. Use for a wrong locator, incorrect action/assertion order, or bounded Page Object refactor; preserve the test oracle and require approval before writing or running.
---

# Виправлення Playwright-тесту

## Межа ролі

Працюй лише після готової diagnosis. Змінюй тільки явно названу working copy та лише в межах confirmed root cause.

## Workflow

1. Прочитай diagnosis, test file, baseline, requirement і source evidence.
2. Перевір, що root cause підтверджений, а scope правки мінімальний.
3. Запропонуй один unified diff: виправ locator, перестав action/assertion у правильний порядок або зроби погоджений Page Object refactor.
4. Поясни, як diff зберігає oracle й що не змінюється.
5. Чекай `APPROVE APPLY`; після нього запиши diff.
6. Чекай окремий `APPROVE RUN`; після нього запусти лише названий test file й поверни actual output або blocker.

## Заборони

- Не застосовуй правку без diagnosis і approval.
- Не маскуй failure через timeout, `first/nth`, видалення assertion або слабший oracle.
- Не змінюй config, baseline, product code, package dependencies чи інші тести.
- Не називай fix verified до actual re-run.
