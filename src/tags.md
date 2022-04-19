---
pagination:
    data: collections
    size: 1
    alias: tag
permalink: /{{ tag }}/
layout: post.njk
eleventyComputed:
    title: "{{ tag | capitalize}}"
---
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
- [{{ post.data.title }}]({{ post.url | url}})
{% endfor %}

