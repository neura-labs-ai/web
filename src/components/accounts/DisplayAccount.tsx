import { Session } from 'next-auth'
import { FC } from 'react'
import TempNav from '../ui/TempNav';

interface DisplayAccountProps {
  session: Session | null
}

const DisplayAccount: FC<DisplayAccountProps> = ({ session }) => {
  return (
			<>
				<h1>{session?.user.name} Account information</h1>
				<br />
				<div>
					<div className="code-block">
						<pre>{JSON.stringify(session?.user, null, 2)}</pre>
					</div>
				</div>

				<br />
				<TempNav session={session} />
			</>
		);
}

export default DisplayAccount