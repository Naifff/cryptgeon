import { call } from '$lib/api'
import { writable } from 'svelte/store'

export type Status = {
	version: string
	max_size: number
	max_views: number
	max_expiration: number
	allow_advanced: boolean
}

export const status = writable<null | Status>(null)

export async function init() {
	const data = await call({
		url: 'status/',
		method: 'get',
	})
	status.set(data)
}
