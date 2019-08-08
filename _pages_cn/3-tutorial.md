---
layout: page
title: 教程
permalink: /cn/tutorials/
lang: cn
---
{% assign sorted = (site.tutorials_cn | sort: 'index') %}
{% for tutorial in sorted %}
  {% capture my_include %}{{ tutorial.content | markdownify }}{% endcapture %}
  {% assign remain = tutorial.index | modulo: 1 %}
  {% assign margin = 3 %}
  {% assign min_height = 0 %}
  {% if remain == 0 %}
    {% if forloop.first == false %}
      {% assign margin = 10 %}
    {% endif %}
  {% endif %}
  {% if forloop.last == true %}
    {% assign min_height = 30 %}
  {% endif %}
  <div style="margin-top:{{ margin }}rem; min-height:{{ min_height }}rem;">
  {{ my_include }}
  </div>
{% endfor %}


<div id="affix">
  <ul>
    {% assign open_count = 0 %}
    {% for tutorial in sorted %}
      {% assign remain = tutorial.index | modulo: 1 %}
      {% if remain == 0 %}
        {% if forloop.first == false %}
          </ul>
          {% capture open_count %}{{ open_count | minus: 1 }}{% endcapture %}
        {% endif %}
        <li class="collapsible">
          <a href="#{{ tutorial.slug }}">{{ tutorial.title }}</a>
        </li>
        <ul>
        {% capture open_count %}{{ open_count | plus: 1 }}{% endcapture %}
      {% else %}
        <li>
          <a href="#{{ tutorial.slug }}">{{ tutorial.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
    {% for i in (1..open_count) %}
      </ul>
    {% endfor %}
  </ul>
</div>
