import { html_style_ } from 'ctx-core/html'
/**
 * @param {MouseEvent}event
 */
export function ripple_effect__onclick(event) {
	const { clientX, clientY } = event
	const currentTarget = event.currentTarget
	const { left: currentTarget_left, top: currentTarget_top } = currentTarget.getBoundingClientRect()
	const div = document.createElement('div')
	const { offsetHeight, offsetWidth } = currentTarget
	const length = Math.min(offsetHeight, offsetWidth)
	const styles = {
		height: `${length}px`,
		width: `${length}px`,
		top: `${clientY - currentTarget_top - length / 2}px`,
		left: `${clientX - currentTarget_left - length / 2}px`
	}
	const ripple_color =
		currentTarget.getAttribute('data-ripple-color')
		|| currentTarget.getAttribute('ripple_color')
	if (ripple_color) {
		styles.background = ripple_color
	}
	div.classList.add('ripple-effect')
	div.setAttribute('style', html_style_(styles))
	currentTarget.appendChild(div)
	setTimeout(()=>div.classList.add('ripple-effect-start'), 0)
	setTimeout(()=>currentTarget.removeChild(div), 2000)
}
export {
	ripple_effect__onclick as onclick_ripple_effect,
	ripple_effect__onclick as __click__ripple_effect,
}
