# Test Title
There is a lot more here than I realize.

## Heading 2

This is *italic* and this is **bold**. Here is ~~strikethrough~~

A table:

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Heading 3

Here is a link to [the hooks API](https://reactjs.org/docs/hooks-reference.html#useeffect).

#### Heading 4

And some lists:
* abc
* def
* ghijklmnop
* qrs
* tuv
* wxyz

1. Up and
2. down
3. and all
4. around

- [ ] How does it handle checkboxes?
- [x] I sense a disturbance in the force
- [ ] Unfulfilled dreams

term
: definition

something 
: else
: to look forward to

##### Heading 5

Additional text:

> If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders. Learn more about how to deal with functions and what to do when the array values change too often.
>
> If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.
>
> If you pass an empty array ([]), the props and state inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.
>
> We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.

-------

Those were all quotes

###### Heading 6

I'm not sure how to test pictures on this.  Let's test `code` instead:

```python
def test():
    a = 5
    b = a * 2
    c = DataFrame()
    print(b)
```