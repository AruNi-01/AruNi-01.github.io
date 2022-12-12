const l=JSON.parse('{"key":"v-bc7eb646","path":"/posts/2022-12-1-ThreadLocal%20%E8%AF%A6%E8%A7%A3.html","title":"ThreadLocal \u8BE6\u89E3","lang":"en-US","frontmatter":{"title":"ThreadLocal \u8BE6\u89E3","subtitle":"\u5403\u900F ThreadLocal\u300CTag - Java \u5E76\u53D1\u300D","author":"AruNi_Lu","date":"2022-12-1","tags":["Java \u5E76\u53D1","Java"],"layout":"Post","useHeaderImage":true,"headerImage":"https://aruni-01-github-io.oss-cn-beijing.aliyuncs.com/posts/ThreadLocal.png","headerMask":"rgba(40, 57, 101, .4)","catalog":true},"excerpt":"<p>Java \u5E76\u53D1\u7CFB\u5217 \u2014\u2014 ThreadLocal \u8BE6\u89E3</p>\\n","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F ThreadLocal\uFF1F","slug":"_1-\u4EC0\u4E48\u662F-threadlocal","children":[]},{"level":2,"title":"2. ThreadLocal \u5185\u90E8\u8BBE\u8BA1","slug":"_2-threadlocal-\u5185\u90E8\u8BBE\u8BA1","children":[{"level":3,"title":"2.1 \u65E9\u671F\u8BBE\u8BA1","slug":"_2-1-\u65E9\u671F\u8BBE\u8BA1","children":[]},{"level":3,"title":"2.2 JDK 1.8 \u7684\u8BBE\u8BA1","slug":"_2-2-jdk-1-8-\u7684\u8BBE\u8BA1","children":[]},{"level":3,"title":"2.3 ThreadLocalMap \u7684\u5B9E\u73B0","slug":"_2-3-threadlocalmap-\u7684\u5B9E\u73B0","children":[]},{"level":3,"title":"2.4 ThreadLocal \u4F1A\u53D1\u751F\u5185\u5B58\u6CC4\u6F0F\u5417\uFF1F","slug":"_2-4-threadlocal-\u4F1A\u53D1\u751F\u5185\u5B58\u6CC4\u6F0F\u5417","children":[]},{"level":3,"title":"2.5 key \u4E3A\u4EC0\u4E48\u8BBE\u8BA1\u6210\u5F31\u5F15\u7528\uFF1F","slug":"_2-5-key-\u4E3A\u4EC0\u4E48\u8BBE\u8BA1\u6210\u5F31\u5F15\u7528","children":[]},{"level":3,"title":"2.5 value \u4E3A\u4EC0\u4E48\u4E0D\u8BBE\u8BA1\u6210\u5F31\u5F15\u7528\u5462\uFF1F","slug":"_2-5-value-\u4E3A\u4EC0\u4E48\u4E0D\u8BBE\u8BA1\u6210\u5F31\u5F15\u7528\u5462","children":[]}]},{"level":2,"title":"3. ThreadLocal \u5E94\u7528\u573A\u666F","slug":"_3-threadlocal-\u5E94\u7528\u573A\u666F","children":[{"level":3,"title":"3.1 \u7EF4\u62A4\u6570\u636E\u5E93\u8FDE\u63A5\u5BF9\u8C61 Connection","slug":"_3-1-\u7EF4\u62A4\u6570\u636E\u5E93\u8FDE\u63A5\u5BF9\u8C61-connection","children":[]},{"level":3,"title":"3.2 \u4FDD\u5B58\u7528\u6237\u4FE1\u606F","slug":"_3-2-\u4FDD\u5B58\u7528\u6237\u4FE1\u606F","children":[]},{"level":3,"title":"3.3 \u4FDD\u5B58\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u5DE5\u5177\u7C7B","slug":"_3-3-\u4FDD\u5B58\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u5DE5\u5177\u7C7B","children":[]}]},{"level":2,"title":"4. ThreadLocal \u6E90\u7801\u521D\u63A2","slug":"_4-threadlocal-\u6E90\u7801\u521D\u63A2","children":[]},{"level":2,"title":"5. ThreadLocalMap \u6E90\u7801\u5256\u6790","slug":"_5-threadlocalmap-\u6E90\u7801\u5256\u6790","children":[{"level":3,"title":"5.1 ThreadLocalMap Hash \u7B97\u6CD5","slug":"_5-1-threadlocalmap-hash-\u7B97\u6CD5","children":[]},{"level":3,"title":"5.2 ThreadLocalMap.set() \u8BE6\u89E3","slug":"_5-2-threadlocalmap-set-\u8BE6\u89E3","children":[]},{"level":3,"title":"5.3 \u6E05\u7406\u903B\u8F91","slug":"_5-3-\u6E05\u7406\u903B\u8F91","children":[{"level":4,"title":"(1) \u63A2\u6D4B\u5F0F\u6E05\u7406","slug":"_1-\u63A2\u6D4B\u5F0F\u6E05\u7406","children":[]},{"level":4,"title":"(2) \u542F\u53D1\u5F0F\u6E05\u7406","slug":"_2-\u542F\u53D1\u5F0F\u6E05\u7406","children":[]}]},{"level":3,"title":"5.4 \u6269\u5BB9\u673A\u5236","slug":"_5-4-\u6269\u5BB9\u673A\u5236","children":[]},{"level":3,"title":"5.5 ThreadLocalMap.get() \u5206\u6790","slug":"_5-5-threadlocalmap-get-\u5206\u6790","children":[]}]},{"level":2,"title":"6. InheritableThreadLocal \u7C7B","slug":"_6-inheritablethreadlocal-\u7C7B","children":[{"level":3,"title":"6.1 \u539F\u7406\u5206\u6790","slug":"_6-1-\u539F\u7406\u5206\u6790","children":[]}]},{"level":2,"title":"7. ThreadLocal \u4F7F\u7528\u6CE8\u610F\u4E8B\u9879","slug":"_7-threadlocal-\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879","children":[{"level":3,"title":"7.1 \u907F\u514D\u7EBF\u7A0B\u590D\u7528\uFF08\u7EBF\u7A0B\u6C60\uFF09\u65F6\u7684\u810F\u6570\u636E","slug":"_7-1-\u907F\u514D\u7EBF\u7A0B\u590D\u7528-\u7EBF\u7A0B\u6C60-\u65F6\u7684\u810F\u6570\u636E","children":[]},{"level":3,"title":"7.2 \u5185\u5B58\u6CC4\u6F0F\u95EE\u9898","slug":"_7-2-\u5185\u5B58\u6CC4\u6F0F\u95EE\u9898","children":[]}]},{"level":2,"title":"8. \u53C2\u8003\u6587\u7AE0","slug":"_8-\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"updatedTime":1670861364000},"readingTime":{"minutes":38,"words":6522},"filePathRelative":"posts/2022-12-1-ThreadLocal \u8BE6\u89E3.md"}');export{l as data};
