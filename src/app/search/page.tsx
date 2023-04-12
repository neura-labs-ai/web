import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react'

export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
  // todo - add dynamic metadata

	return {
		title: "Search A Library",
		description:
			"Search through our amazing engine of library's made by the community.",
	};
}

interface SearchPageProps {
  
}

const page: FC<SearchPageProps> = ({}) => {
	return (
		<>
			<h1>Some Amazing Search Engine</h1>

			<br />
			<Button>
				<Link href={"/"}>Back</Link>
			</Button>
		</>
	)
};

export default page