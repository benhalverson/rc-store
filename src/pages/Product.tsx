/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense, useState } from "react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import ColorPicker from "../components/colorPicker";
import FilamentDropdown from '../components/filamentDropdown';
const PreviewComponent = lazy(() => import("../components/PreviewComponent"));

const product = {
	name: "RC Wheels",
	price: "$35",
	description: `
    <p>This is a 12mm RC buggy wheel that will fit any modern buggy for 1/10 scale racing.</p>
  `,
};

export default function ProductPage() {
	const [selectedFilament, setSelectedFilament] = useState<string>("PLA");	

	return (
		<div className="bg-white">
			<header className="relative bg-white">
				<nav
					aria-label="Top"
					className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				>
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center justify-between">
							{/* Logo */}
							<a href="#" className="flex">
								<span className="sr-only">RC stuff</span>
								RC Stuff
							</a>

							<div className="flex flex-1 items-center justify-end">
								{/* Account */}
								<a
									href="#"
									className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
								>
									<span className="sr-only">Account</span>
									<UserIcon aria-hidden="true" className="h-6 w-6" />
								</a>

								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<a href="#" className="group -m-2 flex items-center p-2">
										<ShoppingBagIcon
											aria-hidden="true"
											className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
										/>
										<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
											0
										</span>
										<span className="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
				<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
					<div className="lg:col-span-5 lg:col-start-8">
						<div className="flex justify-between">
							<h1 className="text-xl font-medium text-gray-900">
								{product.name}
							</h1>
							<p className="text-xl font-medium text-gray-900">
								{product.price}
							</p>
						</div>
					</div>

					<div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
						<h2 className="sr-only">Images</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
							<Suspense fallback={<div>Loading...</div>}>
								<PreviewComponent
									url="https://pub-0ec69c7d5c064de8b57f5d594f07bc02.r2.dev/pyramid.stl"
									onExceedsLimit={() => false}
									onError={() => (
										<div>
											<p>There was an error loading the model</p>
										</div>
									)}
								/>
							</Suspense>
						</div>
					</div>

					<div className="mt-8 lg:col-span-5">
						<form>
							
							<div>
								<h2 className="text-sm font-medium text-gray-900">Filament Selection</h2>
									<FilamentDropdown selectedFilament={selectedFilament} setSelectedFilament={setSelectedFilament}/>
							</div>
							<div>
								<h2 className="text-sm font-medium text-gray-900">Color</h2>

								<ColorPicker filamentType={selectedFilament}/>
							</div>

							<button
								type="submit"
								className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Add to cart
							</button>
						</form>

						{/* Product details */}
						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">Description</h2>

							<div
								dangerouslySetInnerHTML={{ __html: product.description }}
								className="prose prose-sm mt-4 text-gray-500"
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
