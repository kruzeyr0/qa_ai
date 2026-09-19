# QAuto CRUD — Execution Evidence

## Run summary

- Collection: QAuto Lecture 05 - CRUD + Boundary + Negative
- Environment: WhaleApp Stage
- Iterations: 1
- Total tests: 33
- Passed: 32
- Failed: 1
- Skipped: 0
- Errors: 0
- Duration: 2.708 s
- Average response time: 117 ms

## Execution results

| Step | Scenario | HTTP status | Result |
|---|---|---:|---|
| 1 | Create User | 201 | PASS |
| 2 | Get Current User | 200 | PASS |
| 3 | Update Profile | 200 | PASS |
| 4 | Negative — Signup without required `lastName` | 400 | PASS |
| 5 | Get Car Brands | 200 | PASS |
| 6 | Get Car Models | 200 | PASS |
| 7 | Boundary — mileage above maximum | 400 | PASS |
| 8 | Create Car | 201 | FAIL |
| 9 | Get Car by ID | 200 | PASS |
| 10 | Update Car | 200 | PASS |
| 11 | Delete Car | 200 | PASS |
| 12 | Delete User | 200 | PASS |

## Failed test

### Create Car

The test assertion expected HTTP status `200`, but the API returned `201`.

Actual result:

```text
AssertionError: expected response to have status code 200 but got 201