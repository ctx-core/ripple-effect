import { style_ } from '@ctx-core/html'
export function onclick_ripple_effect(event:MouseEvent):void {
	const { clientX, clientY } = event
	const currentTarget = event.currentTarget as HTMLElement
	const {
		left: currentTarget_left,
		top: currentTarget_top
	} = (currentTarget as HTMLElement).getBoundingClientRect()
	const div = document.createElement('div')
	const { offsetHeight, offsetWidth } = currentTarget
	const length = Math.min(offsetHeight, offsetWidth)
	const styles:Partial<CSSStyleDeclaration> = {
		height: `${length}px`,
		width: `${length}px`,
		top: `${(clientY - currentTarget_top) - length / 2}px`,
		left: `${(clientX - currentTarget_left) - length / 2}px`,
	}
	const ripple_color = currentTarget.getAttribute('ripple_color')
	if (ripple_color) {
		styles.background = ripple_color
	}
	div.classList.add('ripple-effect')
	div.setAttribute('style', style_(styles))
	currentTarget.appendChild(div)
	setTimeout(()=>{
		div.classList.add('ripple-effect-start')
	}, 0)
	window.setTimeout(
		()=>currentTarget.removeChild(div),
		2000)
}
export {
	onclick_ripple_effect as __click__ripple_effect
}
