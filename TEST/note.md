## 测试用例是什么？

一个测试用例就是为了验证软件功能，而设计的一系列操作。一个测试用例应该包括测试的步骤，测试数据，前置条件，后置条件，特殊的测试场景。
可能还需要站在用户的角度来思考软件是否能够满足用户的使用。

## 怎样写测试用例?
这篇文章将介绍如何写标准的测试用例

### 创建测试场景(Test Scenario)
Let’s create a Test Case for the scenario: Check Login Functionality
为用户登录的场景创建测试用例

Step 1) A simple test case to explain the scenario would be(一个测试用例描述的测试场景)

|  Test Case   |  Test Case Description  |
|  ----        | ----  |
| 1            | Check response when valid email and password is entered |

Step 2) Test the Data.
In order to execute the test case, you would need Test Data. Adding it below（准备测试数据）

|  Test Case   |  Test Case Description  |  Test Data |
|  ----        | ----                       | ---- |
| 1            | Check response when valid email and password is entered | Email: guru99@email.com Password: lNf9^Oti7^2h |

Step 3) Perform actions.
In order to execute a test case, a tester needs to perform a specific set of actions on the AUT. This is documented as below:（测试步骤）

|  Test Case   |  Test Case Description  | Test Steps   |  Test Data |
|  ----        | ----                    |      ----    | ---- |
| 1            | Check response when valid email and password is entered | 1) Enter Email Address 2) Enter Password 3) Click Sign in |  Email: guru99@email.com Password: lNf9^Oti7^2h |

Step 4) Check behavior of the AUT.
The goal of test cases in software testing is to check behavior of the AUT for an expected result. This needs to be documented as below（期望结果）

|  Test Case   |  Test Case Description  | Test Steps   |  Test Data | Expected Result |
|  ----        | ----                    |      ----    | ---- |                  ---- |
| 1            | Check response when valid email and password is entered | 1) Enter Email Address 2) Enter Password 3) Click Sign in |  Email: guru99@email.com Password: lNf9^Oti7^2h | Login should be successful |

During test execution time, the tester will check expected results against actual results and assign a pass or fail status
在执行期间，测试人员将要检查期望结果是否与真是结果相同，来决定测试用例是否通过。

|  Test Case   |  Test Case Description  | Test Steps   |  Test Data | Expected Result | Actual Result | Pass/Fail |
|  ----        | ----                    |      ----    | ---- |                  ---- |    ---- |            ---- |
| 1            | Check response when valid email and password is entered | 1) Enter Email Address 2) Enter Password 3) Click Sign in |  Email: guru99@email.com Password: lNf9^Oti7^2h | Login should be successful |  Login was successful |   Pass|

Step 5) 运行条件
测试用例运行的前置条件（如：需要安装xxx，才能进行测试），后置条件（如：测试用例运行结束需要在多长时间内，xxx数据应该已经被存储到数据库中）


## 高质量测试用例具备的条件
Best Practice for writing good Test Case Example.

1. 简单且透明
2. 使用用户思维创建测试用例
3. 避免重复
4. 不要主观臆想
5. 100%的覆盖率
6. 测试用例ID唯一
7. 善于使用测试技巧： Boundary Value Analysis (BVA)边缘分析、Equivalence Partition (EP) 等类划分、State Transition Technique 状态过渡、Error Guessing Technique 错误预测 这个比较依赖于测试者的经验
8. Peer Review 同事评估


## 工具推荐
测试管理工具可以帮助测试者管理维护测试用例。有下面一些特性：

1. 借助工具便捷的创建测试模板
2. 方便的执行用例记录测试结果
3. 测试不通过的用例自动提交给开发者追踪bug
4. 可追踪，更方便的统计测试覆盖率

Popular Test Management tools are: Quality Center and JIRA
流行的测试管理工具有 uality Center and JIRA


## 参考
[How to Write Test Cases: Sample Template with Examples](https://www.guru99.com/test-case.html)
[Sample Test Case Template With Test Case Examples](https://www.softwaretestinghelp.com/test-case-template-examples/)