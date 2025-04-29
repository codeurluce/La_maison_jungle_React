import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}
function PlantItem({ id, cover, name, water, light }) {
	return (
		<div className="lmj-plant-item-wrapper">
			<li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
				<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
			</li>
			<div className="lmj-plant-item-infos">
				<p>{name}</p>
				<CareScale careType="water" scaleValue={water} />
				<CareScale careType="light" scaleValue={light} />
			</div>
		</div>
	)
}


export default PlantItem