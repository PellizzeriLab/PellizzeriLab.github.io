---
title: "Pellizzeri Lab - Computing"
layout: textlay
excerpt: "Pellizzeri Lab -- Computing Resources"
sitemap: false
permalink: /computing/
---

# Computing Resources

<div class="content-card" markdown="0">
  <p class="mb-0">Our research is powered by modern computational chemistry workflows, reproducible Python pipelines, and high-performance computing resources. Students in the group gain direct experience in model setup, simulation workflows, and scientific data analysis.</p>
</div>

## Software and Methods

<div class="row g-3" markdown="0">
{% for stack in site.data.software_stack %}
  <div class="col-md-6">
    <div class="content-card h-100">
      <h3 class="h5">{{ stack.category }}</h3>
      <ul class="mb-0">
      {% for t in stack.tools %}
        <li>{{ t }}</li>
      {% endfor %}
      </ul>
    </div>
  </div>
{% endfor %}
</div>

## Student Training Focus

<div class="content-card" markdown="0">
  <ul class="mb-0">
    <li>Building robust computational models with physically meaningful assumptions</li>
    <li>Interpreting reaction energetics, kinetics, and mechanism trends</li>
    <li>Writing reproducible scripts for data analysis and visualization</li>
    <li>Communicating computational findings to experimental collaborators</li>
  </ul>
</div>

<p class="text-muted small">Last updated: July 2026</p>