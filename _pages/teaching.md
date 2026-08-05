---
title: "Pellizzeri Lab - Teaching"
layout: textlay
excerpt: "Pellizzeri Lab -- Teaching"
sitemap: false
permalink: /teaching/
---

# Teaching

<div class="teaching-page" markdown="0">
	<p class="text-muted">Jump to: <a href="#current-courses">Current Courses</a> | <a href="#past-courses">Past Courses</a> | <a href="#student-resources">Student Resources</a> | <a href="#teaching-philosophy">Teaching Philosophy</a></p>

	<p>Course descriptions are available through the <a href="https://www.eiu.edu/eiuchem/courses.php">EIU Chemistry and Biochemistry course listing</a>.</p>

	<section class="content-card" id="current-courses">
		<h2>Current Courses</h2>
		<div class="table-responsive">
			<table class="table table-striped table-hover align-middle current-courses-table">
				<caption class="visually-hidden">Current chemistry courses taught by the Pellizzeri Lab group.</caption>
				<thead>
					<tr>
						<th>Course</th>
						<th>Title</th>
						<th>Semester</th>
						<th>Level</th>
						<th>Syllabus</th>
					</tr>
				</thead>
				<tbody>
					{% for course in site.data.current_courses %}
					<tr>
						<td><strong>{{ course.code }}</strong></td>
						<td>{{ course.title }}</td>
						<td>{{ course.semester }}</td>
						<td>{{ course.level }}</td>
						<td>
							{% if course.syllabus and course.syllabus != "" %}
							<a class="btn btn-sm btn-outline-primary" href="{{ site.url }}{{ site.baseurl }}{{ course.syllabus }}" target="_blank" rel="noopener noreferrer">View Syllabus</a>
							{% else %}
							<span class="text-muted small">Not posted</span>
							{% endif %}
						</td>
					</tr>
					{% endfor %}
				</tbody>
			</table>
		</div>
	</section>

	<section class="content-card" id="past-courses">
		<h2>Past Courses</h2>
		<div class="row g-3">
			{% for course in site.data.past_courses %}
			<div class="col-md-6 col-lg-4">
				<div class="border rounded p-3 h-100 bg-white">
					<div class="fw-semibold">{{ course.code }}</div>
					<div>{{ course.title }}</div>
					<small class="text-muted">{{ course.level }}</small>
				</div>
			</div>
			{% endfor %}
		</div>
	</section>

	<section class="content-card" id="student-resources">
		<h2>Student Resources</h2>
		<ul class="mb-0">
			<li>Office hours and course logistics are shared on each course LMS page.</li>
			<li>Recommended study approach: active problem-solving, spaced review, and group discussion.</li>
			<li>For support with chemistry fundamentals, students are encouraged to use tutoring and supplemental instruction resources at EIU.</li>
		</ul>
	</section>

	<section class="content-card" id="teaching-philosophy">
		<h2>Teaching Philosophy</h2>
		<p class="mb-0">My goal is to help students build durable problem-solving skills in chemistry by connecting core concepts to real molecular systems. I emphasize clear reasoning, quantitative thinking, and scientific communication so students can apply chemistry confidently in advanced coursework, research, and professional settings.</p>
	</section>

	<p class="text-muted small mt-3">Last updated: July 2026</p>
</div>
