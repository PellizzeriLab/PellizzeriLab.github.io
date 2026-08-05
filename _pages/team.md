---
title: "Pellizzeri Lab - Team"
layout: gridlay
excerpt: "Pellizzeri Lab: Team members"
sitemap: false
permalink: /team/
---

# Group Members

Jump to [PI](#pi), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni).

## PI
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row g-3">
{% endif %}

<div class="col-md-6 mb-3">
  <div class="team-member-card h-100 p-3 border rounded bg-white shadow-sm">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded team-member-photo" alt="{{ member.name }}" />
  <h3 class="h4">{{ member.name }}</h3>
  <p class="member-meta"><em>{{ member.info }}<br>email: <a href="mailto:{{ member.email }}">{{ member.email }}</a><br></em></p>
  <div class="member-actions" markdown="0">
    <a class="btn btn-sm btn-outline-primary" href="mailto:{{ member.email }}">Contact</a>
    <a class="btn btn-sm btn-outline-secondary" href="{{ site.url }}{{ site.baseurl }}/publications">Publications</a>
    <a class="btn btn-sm btn-outline-secondary" href="{{ site.url }}{{ site.baseurl }}/documents/Pellizzeri_CV_5_17_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
  </div>
  <ul class="mb-0">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
  </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Master Students
{% assign number_printed = 0 %}
{% for member in site.data.M_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row g-3">
{% endif %}

<div class="col-md-6 mb-3">
  <div class="team-member-card h-100 p-3 border rounded bg-white shadow-sm">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded team-member-photo" alt="{{ member.name }}" />
  <h3 class="h4">{{ member.name }}</h3>
  <p class="member-meta"><em>{{ member.info }}<br>email: <a href="mailto:{{ member.email }}">{{ member.email }}</a><br>Semester(s) in Group: {{ member.semesters }}</em></p>
  <div class="member-actions" markdown="0">
    <a class="btn btn-sm btn-outline-primary" href="mailto:{{ member.email }}">Contact</a>
    <a class="btn btn-sm btn-outline-secondary" href="{{ site.url }}{{ site.baseurl }}/research">Project Area</a>
  </div>
  <ul class="mb-0">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
  </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Bachelor Students
{% assign number_printed = 0 %}
{% for member in site.data.B_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row g-3">
{% endif %}

<div class="col-md-6 mb-3">
  <div class="team-member-card h-100 p-3 border rounded bg-white shadow-sm">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded team-member-photo" alt="{{ member.name }}" />
  <h3 class="h4">{{ member.name }}</h3>
  <p class="member-meta"><em>{{ member.info }}<br>email: <a href="mailto:{{ member.email }}">{{ member.email }}</a><br>Semester(s) in Group: {{ member.semesters }}</em></p>
  <div class="member-actions" markdown="0">
    <a class="btn btn-sm btn-outline-primary" href="mailto:{{ member.email }}">Contact</a>
    <a class="btn btn-sm btn-outline-secondary" href="{{ site.url }}{{ site.baseurl }}/openings">Opportunities</a>
  </div>
  <ul class="mb-0">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
  </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Alumni
{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row g-3">
{% endif %}

<div class="col-md-6 mb-3">
  <div class="team-member-card h-100 p-3 border rounded bg-white shadow-sm">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded team-member-photo" alt="{{ member.name }}" />
  <h3 class="h4">{{ member.name }}</h3>
  <p class="member-meta"><em>{{ member.info }}<br>Semester(s) in Group: {{ member.semesters }}</em></p>
  <ul class="mb-0">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
  </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
