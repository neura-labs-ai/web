import { Library } from "@prisma/client";

interface Mock extends Library {
	comments: {
		id: string;
		text: string;
		upvotes: number;
		downvotes: number;
		authorId: string;
	}[];
	owner: {
		name: string;
		email: string;
	};
}

export default [
	{
		id: "1",
		name: "React",
		description: "A JavaScript library for building user interfaces",
		language: "JavaScript",
		tags: ["Framework", "UI", "Library"],
		imageIcon: "https://example.com/images/react.png",
		homepage: "https://reactjs.org/",
		repository: "",
		openSource: true,
		stars: 5,
		owner: {
			name: "John Doe",
			email: "some1@code.dev",
		},
		comments: [
			{
				id: "101",
				text: "This is an amazing library!",
				authorId: "1001",
				upvotes: 33,
				downvotes: 0,
			},
			{
				id: "102",
				text: "It has a steep learning curve, but it's worth it.",
				authorId: "1002",
				upvotes: 12,
				downvotes: 1,
			},
		],
	},
	{
		id: "2",
		name: "NumPy",
		description:
			"A library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.",
		language: "Python",
		tags: ["Mathematics", "DataScience"],
		imageIcon: "https://example.com/images/numpy.png",
		homepage: "https://numpy.org/",
		repository: "https://github.com/numpy/numpy",
		openSource: true,
		stars: 4,
		owner: {
			name: "John Doe 2",
			email: "some2@code.dev",
		},
		comments: [
			{
				id: "201",
				text: "This is a must-have library for any data scientist!",
				authorId: "1001",
				upvotes: 87,
				downvotes: 0,
			},
			{
				id: "202",
				text:
					"It's a bit slow for large arrays, but still a great library overall.",
				authorId: "1003",
				upvotes: 3,
				downvotes: 2,
			},
		],
	},
	{
		id: "3",
		name: "Express",
		description: "A fast, un-opinionated, minimalist web framework for Node.js",
		language: "JavaScript",
		tags: ["Library", "Backend", "API"],
		imageIcon: "https://example.com/images/express.png",
		homepage: "https://expressjs.com/",
		repository: "https://github.com/expressjs/express",
		openSource: true,
		stars: 4,
		owner: {
			name: "John Doe 3",
			email: "some3@code.dev",
		},
		comments: [
			{
				id: "301",
				text: "This is a great framework for building APIs!",
				authorId: "1004",
				upvotes: 17,
				downvotes: 2,
			},
			{
				id: "302",
				text:
					"It's easy to get started, but can become complex for larger projects.",
				authorId: "1002",
				upvotes: 20,
				downvotes: 0,
			},
		],
	},
	{
		id: "4",
		name: "Django",
		description:
			"A high-level Python web framework that enables rapid development of secure and maintainable websites.",
		language: "Python",
		tags: ["Web", "Framework", "Backend", "Library"],
		imageIcon: "https://example.com/images/django.png",
		homepage: "https://www.djangoproject.com/",
		repository: "https://github.com/django/django",
		openSource: true,
		stars: 4,
		owner: {
			name: "Jane Doe",
			email: "jane@code.dev",
		},
		comments: [
			{
				id: "401",
				text: "This is my go-to framework for building web applications in Python!",
				authorId: "1003",
				upvotes: 2,
				downvotes: 0,
			},
			{
				id: "402",
				text:
					"It can be overwhelming at first, but once you get the hang of it, it's amazing.",
				authorId: "1001",
				upvotes: 20,
				downvotes: 0,
			},
		],
	},
	{
		id: "5",
		name: "TensorFlow",
		description: "An end-to-end open source machine learning platform.",
		language: "Python",
		tags: ["ArtificialIntelligence", "MachineLearning", "DataScience", "Library"],
		imageIcon: "https://example.com/images/tensorflow.png",
		homepage: "https://www.tensorflow.org/",
		repository: "https://github.com/tensorflow/tensorflow",
		openSource: true,
		stars: 5,
		owner: {
			name: "John Smith",
			email: "john@code.dev",
		},
		comments: [
			{
				id: "501",
				text: "This library has revolutionized machine learning!",
				stars: 5,
				authorId: "1002",
				upvotes: 200,
				downvotes: 3,
			},
			{
				id: "502",
				text:
					"It can be difficult to understand at first, but once you do, it's amazing what you can do with it.",
				stars: 4,
				authorId: "1004",
				upvotes: 400,
				downvotes: 2,
			},
		],
	},
	{
		id: "6",
		name: "Vue.js",
		description:
			"A progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
		language: "JavaScript",
		tags: ["UI", "Framework", "Frontend", "Library", "Web"],
		imageIcon: "https://example.com/images/vuejs.png",
		homepage: "https://vuejs.org/",
		repository: "https://github.com/vuejs/vue",
		openSource: true,
		stars: 4,
		owner: {
			name: "Jane Smith",
			email: "jane@code.dev",
		},
		comments: [
			{
				id: "601",
				text: "This is an amazing framework for building dynamic UI!",
				authorId: "1004",
				upvotes: 568,
				downvotes: 40,
			},
			{
				id: "602",
				text:
					"It can be a bit confusing to learn at first, but once you do, it's great.",
				authorId: "1001",
				upvotes: 20,
				downvotes: 0,
			},
		],
	},
	{
		id: "7",
		name: "Flask",
		description: "A micro web framework written in Python",
		language: "Python",
		tags: ["Web", "Framework", "Backend", "Library"],
		imageIcon: "https://example.com/images/flask.png",
		homepage: "https://palletsprojects.com/p/flask/",
		repository: "https://github.com/pallets/flask",
		openSource: true,
		stars: 4,
		owner: {
			name: "John Smith",
			email: "john@code.dev",
		},
		comments: [
			{
				id: "701",
				text: "Flask is a great choice for small projects!",
				stars: 4,
				authorId: "1001",
				upvotes: 30,
				downvotes: 3,
			},
			{
				id: "702",
				text: "I love how flexible Flask is!",
				stars: 5,
				authorId: "1004",
				upvotes: 200,
				downvotes: 39,
			},
		],
	},
	{
		id: "8",
		name: "Pandas",
		description:
			"A fast, powerful, flexible and easy to use open source data analysis and manipulation tool",
		language: "Python",
		tags: ["DataScience", "Statistics"],
		imageIcon: "https://example.com/images/pandas.png",
		homepage: "https://pandas.pydata.org/",
		repository: "https://github.com/pandas-dev/pandas",
		openSource: true,
		stars: 5,
		owner: {
			name: "Jane Doe",
			email: "something@gmail.com",
		},
		comments: [
			{
				id: "801",
				text: "This is an amazing library for data analysis!",
				authorId: "1002",
				upvotes: 50,
				downvotes: 3,
			},
		],
	},
	{
		id: "9",
		name: "React Native",
		description:
			"A framework for building native mobile apps using JavaScript and React",
		language: "JavaScript",
		tags: ["UI", "Framework", "Mobile", "Frontend", "Library"],
		imageIcon: "https://example.com/images/react-native.png",
		homepage: "https://reactnative.dev/",
		repository: "https://github.com/facebook/react-native",
		openSource: true,
		stars: 109_000,
		owner: {
			name: "Facebook",
			email: "facebook@meta.com",
		},
		comments: [
			{
				id: "901",
				text: "This is an amazing framework for building native mobile apps!",
				authorId: "1004",
				upvotes: 568,
				downvotes: 40,
			},
		],
	},
	{
		id: "10",
		name: "Ruby on Rails",
		description:
			"A web application framework that uses the Ruby programming language",
		language: "Ruby",
		tags: ["Web", "Framework", "Backend", "Library"],
		imageIcon: "https://example.com/images/rails.png",
		homepage: "https://rubyonrails.org/",
		repository: "",
		openSource: true,
		stars: 849,
		owner: {
			name: "David Heinemeier Hansson",
			email: "davud@gmail.com",
		},
		comments: [
			{
				id: "1001",
				text: "This is an amazing framework for building web apps!",
				authorId: "1004",
				upvotes: 568,
				downvotes: 40,
			},
			{
				id: "1002",
				text: "I love how flexible Rails is!",
				authorId: "1001",
				upvotes: 200,
				downvotes: 39,
			},
		],
	},
] as Mock[];
