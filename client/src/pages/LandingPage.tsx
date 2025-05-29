import React from 'react';
import { Link } from 'react-router-dom';

const features = [
	{
		title: 'Plan Outfits for Any Event',
		description:
			'Create or join public and private events. See what others are wearing and avoid outfit clashes.',
		icon: '🎉',
	},
	{
		title: 'Multi-Item Outfit Uploads',
		description:
			'Upload or link multiple items per outfit—tops, bottoms, shoes, accessories, and more.',
		icon: '👗',
	},
	{
		title: 'Share & Collaborate',
		description:
			'Invite friends with a shareable link. Collaborate on event vibes and dress codes.',
		icon: '🔗',
	},
	{
		title: 'See the Vibe',
		description:
			'Browse outfit grids for inspiration. Get the vibe before you arrive.',
		icon: '👀',
	},
];

const steps = [
	{
		step: '1',
		title: 'Create or Join an Event',
		description: 'Start a new event or join one with a link.',
	},
	{
		step: '2',
		title: 'Upload Your Outfits',
		description: 'Add photos or links for each item you plan to wear.',
	},
	{
		step: '3',
		title: 'See What Others Are Wearing',
		description: 'Browse the event feed and get inspired.',
	},
];

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col">
			{/* Hero Section */}
			<section className="flex-1 flex flex-col justify-center items-center text-center py-20 px-4">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-10 drop-shadow-lg leading-relaxed px-2">
					Plan Outfits. Avoid Clashes. Dress Right.
				</h1>
				<p className="max-w-xl mx-auto text-lg sm:text-2xl text-gray-700 mb-8">
					What2Wear helps you coordinate outfits for any event—see what others are
					wearing, get inspired, and always dress for the vibe.
				</p>
				<Link
					to="/create"
					className="inline-flex items-center px-8 py-4 rounded-full bg-pink-600 text-white text-lg font-semibold shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all duration-200 mb-4"
				>
					Create Your First Event
				</Link>
				<div className="text-sm text-gray-500">No account needed to get started!</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white/80">
				<div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all h-full"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="font-bold text-lg mb-3 text-pink-700">
								{feature.title}
							</h3>
							<p className="text-gray-600 text-sm">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
				<div className="max-w-4xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
						How It Works
					</h2>
					<div className="grid gap-8 sm:grid-cols-3">
						{steps.map((step) => (
							<div
								key={step.step}
								className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md"
							>
								<div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-bold text-2xl mb-4">
									{step.step}
								</div>
								<h4 className="font-semibold text-lg mb-2">
									{step.title}
								</h4>
								<p className="text-gray-600 text-sm">
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
					Ready to plan your next event?
				</h2>
				<p className="text-lg text-gray-700 mb-8 px-4 sm:px-0">
					Start now and make sure everyone dresses for the vibe.
				</p>
				<Link
					to="/create"
					className="inline-flex items-center px-8 py-4 rounded-full bg-pink-600 text-white text-lg font-semibold shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all duration-200"
				>
					Create Your First Event
				</Link>
			</section>
		</div>
	);
};

export default LandingPage;
