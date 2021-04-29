[css div撑满窗口高度_如何使用CSS将div的高度设置为窗口的100％？](https://blog.csdn.net/cumt951045/article/details/107803050)

css div撑满窗口高度

Introduction:

介绍：

Hello there developers! Well, certainly if you are reading this article then that means that you have run into some trouble while creating your web page or website and if you are a beginner in this field, then there is no better place than this. So let us get started without further adieu. But before we can proceed forward with this article it is crucial to know that what are divs and what could be their possible uses.

您好，开发人员！ 好吧，当然，如果您正在阅读本文，那么这意味着您在创建网页或网站时遇到了麻烦，并且如果您是该领域的初学者，那么没有比这更好的地方了。 因此，让我们开始吧！ 但是在继续本文之前，至关重要的是要知道什么是div以及它们的可能用途。

Definition and uses:

定义和用途：

Well, divs are something that we deal with regularly while developing a web page or website, the divs are used to group lines of texts or elements and anything similar, besides divs are also used to structure the code, so that various sections remain segregated from each other. Although you can make use of section tag both of them behave pretty similarly. Besides divs also help in declaring class and ids of the various elements. Therefore, in a nutshell, it would be right to say that divs are very essential when we are developing a website or web page and divs also help in keeping our code structured.

好吧，divs是我们在开发网页或网站时经常处理的事情，divs用于对文本或元素行以及类似内容进行分组，此外divs还用于构造代码，以便各个部分与彼此。 尽管您可以使用section标签，但它们的行为都非常相似。 除了div之外，还有助于声明各种元素的类和ID。 因此，总的来说，当我们开发网站或网页时，div是非常重要的，而div也有助于保持代码的结构化。

Solution:

解：

We have already seen by now how to set the height of the div elements using CSS height property? Now the question arises what if we want to set the height of the div 100% height of the window? here comes the answer to the solution that is using the vh property in CSS. We will discuss the vh property in detail in this article.

到目前为止，我们已经看到了如何使用CSS height属性设置div元素的高度？ 现在出现了一个问题，如果我们想将div的高度设置为窗口高度的100％，该怎么办？ 这是使用CSS中的vh属性的解决方案的答案。 我们将在本文中详细讨论vh属性。

Property:

属性：

Here, "vh" stands for "viewport-height", and the word viewport refers to the user's browser windows size. So whenever we use the vh property, the element's height is adjusted relative to the height of the viewport.

在此， “ vh”代表“ viewport-height” ，而“ viewport”一词指的是用户浏览器窗口的大小。 因此，每当我们使用vh属性时 ，元素的高度都会相对于视口的高度进行调整。

To set the height of div element to 100% height of the window, we can use the following syntax,

要将div元素的高度设置为窗口的100％高度 ，我们可以使用以下语法，

Syntax:

句法：

    element{
        height:100vh;
    }

Example:

例：


Output

输出量

How to Set height of div to 100% height of window using CSS?
In the above example, it can be seen that by making use of the viewport-height property the height of the div element is 100% height of the window. Therefore, now you know both how to increase the height of the element as well as how to make it equivalent to 100% height of the window.

在上面的示例中，可以看到，通过使用viewport-height属性，div元素的高度为window的100％高度 。 因此，现在您知道如何增加元素的高度以及如何使其等于窗口的100％高度。

This method proves to be very helpful, so just keep in mind that all you gotta do is make use of "vh" property and there you got it!

这种方法被证明是非常有用的，因此请记住，您要做的就是利用“ vh”属性 ，您就已经掌握了！