---
title: "Pellizzeri Lab - Research"
layout: textlay
excerpt: "Pellizzeri Lab -- Research"
sitemap: false
permalink: /research/
---

# Research

<div class="research-page" markdown="0">
	<div class="content-card">
		<p class="mb-2"><strong>The Pellizzeri Group is actively recruiting undergraduate and graduate students.</strong> Projects can be tailored to your interests and may include applications, model development, and coding-focused research.</p>
		<a class="btn btn-primary btn-sm" href="mailto:spellizzeri@eiu.edu">Join the Lab</a>
	</div>

	<section class="content-card">
		<h2>What We Do</h2>
		<p>The Pellizzeri Group uses computational chemistry to predict, explain, and model chemical processes using the core equations of physical chemistry and chemical intuition. We focus on building molecular-level understanding that supports experimental design and materials discovery.</p>
	</section>

	<section class="content-card">
		<h2>Research Areas</h2>
		<div class="row g-3">
			{% for area in site.data.research_areas %}
			<div class="col-lg-4 col-md-6">
				<article class="border rounded p-3 h-100 bg-white">
					<h3 class="h5">{{ area.title }}</h3>
					<p>{{ area.summary }}</p>
					<p><strong>Methods:</strong> {{ area.methods }}</p>
					<p><strong>Impact:</strong> {{ area.impact }}</p>
					<p class="mb-0"><a href="{{ area.publication.url }}">Representative publication</a></p>
				</article>
			</div>
			{% endfor %}
		</div>
	</section>

	<section class="content-card">
		<h2>Methods and Tools</h2>
		<ul class="mb-0">
			<li>Electronic structure calculations and catalyst descriptor analysis</li>
			<li>Reaction pathway, thermodynamics, and kinetics modeling</li>
			<li>Computational screening and workflow automation</li>
			<li>High-performance computing resources for large-scale calculations</li>
		</ul>
	</section>

	<section class="content-card">
		<h2>Open Positions</h2>
		<p class="mb-2">Students with interests in chemistry, physics, mathematics, or coding are encouraged to apply.</p>
		<p class="mb-0">To express interest, email Dr. Pellizzeri with a short background summary and research interests: <a href="mailto:spellizzeri@eiu.edu">spellizzeri@eiu.edu</a>.</p>
	</section>

	<p class="text-muted small mt-3">Last updated: July 2026</p>
</div>

