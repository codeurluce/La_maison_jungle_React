import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const scaleLabels = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? 'de lumière' : "d'arrosage"
	const icon = careType === 'light' ? Sun : Water

	const handleClick = () => {
		alert(`Cette plante requiert ${scaleLabels[scaleValue]} ${scaleType}.`)
	}

	return (
		<div onClick={handleClick} style={{ cursor: 'pointer' }}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<img key={rangeElem.toString()} src={icon} alt={careType} />
				) : null
			)}
		</div>
	)
}

export default CareScale
