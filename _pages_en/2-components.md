---
layout: page
title: Components and Properties
permalink: /en/components/
lang: en
---
It describes about common properties and the property of each component.

{% assign sorted = (site.components_en | sort: 'index') %}
{% for component in sorted %}
  {% capture my_include %}{{ component.content | markdownify }}{% endcapture %}
  {% assign remain = component.index | modulo: 1 %}
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
    {% for component in sorted %}
      {% assign remain = component.index | modulo: 1 %}
      {% if remain == 0 %}
        {% if forloop.first == false %}
          </ul>
          {% capture open_count %}{{ open_count | minus: 1 }}{% endcapture %}
        {% endif %}
        <li class="collapsible">
          <a href="#{{ component.slug }}">{{ component.title }}</a>
        </li>
        <ul>
        {% capture open_count %}{{ open_count | plus: 1 }}{% endcapture %}
      {% else %}
        <li>
          <a href="#{{ component.slug }}">{{ component.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
    {% for i in (1..open_count) %}
      </ul>
    {% endfor %}
  </ul>
</div>
