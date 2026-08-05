---
title: "Pellizzeri Lab - Openings"
layout: textlay
excerpt: "Pellizzeri Lab -- Student Openings"
sitemap: false
permalink: /openings/
---

# Student Openings

<div class="content-card" markdown="0">
  <p class="mb-2"><strong>We are actively recruiting undergraduate and graduate students.</strong></p>
  <p class="mb-3">If you are interested in computational chemistry, catalysis, or environmental materials modeling, we encourage you to contact us.</p>
  <a href="mailto:spellizzeri@eiu.edu" class="btn btn-primary btn-sm">Contact Dr. Pellizzeri</a>
</div>

## Current Opportunities

<div class="row g-3" markdown="0">
{% for opening in site.data.open_positions %}
  <div class="col-md-6 col-lg-4">
    <article class="content-card h-100">
      <h3 class="h5">{{ opening.role }}</h3>
      <p>{{ opening.details }}</p>
      <p class="mb-0"><strong>Background:</strong> {{ opening.background }}</p>
    </article>
  </div>
{% endfor %}
</div>

## How to Apply

<div class="content-card" markdown="0">
  <ol class="mb-0">
    <li>Email a brief introduction and your research interests.</li>
    <li>Include your CV/resume and relevant coursework.</li>
    <li>Optionally include an unofficial transcript and any coding/project samples.</li>
  </ol>
</div>

<p class="text-muted small">Last updated: July 2026</p>