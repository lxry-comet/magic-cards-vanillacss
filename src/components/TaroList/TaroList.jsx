import clsx from 'clsx'
import PropTypes from 'prop-types'
import taro from '../../json/taro.json'
import { getBorderColor } from '../../utils/getBorderColor'
import Taro from '../Taro/Taro'
import css from './TaroList.module.css'

function TaroList({ items }) {
	const cards = Array.isArray(items)
		? items
		: (items &&
				(items.cards || (items.tarot_deck && items.tarot_deck.cards))) ||
			(taro && (taro.cards || (taro.tarot_deck && items.tarot_deck.cards))) ||
			[]

	if (!cards.length) return <p className={css.itemText}>No cards to display</p>

	return (
		<>
			<ul className={css.list}>
				{cards.map(card => (
					<li className={css.item} key={card.id}>
						<div
							className={clsx(
								css.itemContainer,
								css[getBorderColor(cards.indexOf(card))]
							)}
						>
							<Taro
								id={card.id}
								name={
									typeof card.name === 'object' ? card.name.name : card.name
								}
								suite={card.suite}
								description={card.description}
								interpretation={card.interpretation}
								imageUrl={card.imageUrl}
							/>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}

TaroList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
export default TaroList
