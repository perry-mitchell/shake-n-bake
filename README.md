# Shake-N-Bake
Execute script elements that are injected through HTML.

[![Build Status](https://travis-ci.org/perry-mitchell/shake-n-bake.svg?branch=master)](https://travis-ci.org/perry-mitchell/shake-n-bake)

## Why
When injecting HTML into an element using `element.innerHTML = "..."`, scripts contained within are not executed. For example, the following JavaScript within the quoted HTML will not execute:

```
var container = document.getElementById("container");
container.innerHTML = '<div><script type="text/javascript">alert("This won't appear");</script></div>';
```

## How it works
SnB simply takes the content of the script out of the element, and creates a new script element with the contents. It inserts it back into the DOM as an element instance (not a string) and the browser executes the contents.

