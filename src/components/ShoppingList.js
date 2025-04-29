
import { plantList } from "../datas/plantsList";
import '../styles/shoppingList.css';
import PlantItem from './PlantItem';

    //  🔹 Extraction des catégories uniques avec reduce()
    // function ShoppingList() {
    // const categories = plantList.reduce((acc, plant) => {
    //     if (!acc.includes(plant.category)) {
    //         acc.push(plant.category)
    //     }
    //     return acc
    // }, [])

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}
export default ShoppingList