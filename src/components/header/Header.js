export default function Header({counter, setShowChart}) {
	return (
		<div className='header'>
			<h2 onClick={() => setShowChart(false)}>Glosary</h2>
			<ul>
				<li>
					<button onClick={() => setShowChart(true)}>Shopping</button>
					<span className='cartCount'>{counter}</span>
				</li>
			</ul>
		</div>
	)
}