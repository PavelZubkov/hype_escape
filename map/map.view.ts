namespace $.$$ {

	class Position extends $mol_object {

		options() {
			return { enableHighAccuracy: true }
		}

		@ $mol_mem
		watcher() {
			const id = this.$.$mol_dom_context.navigator.geolocation.watchPosition(
				$mol_wire_async( (val: GeolocationPosition) => this.value(val) ),
				$mol_wire_async( (error: GeolocationPositionError) => this.error(error) ),
				this.options(),	
			)

			return { destructor: () => this.$.$mol_dom_context.navigator.geolocation.clearWatch(id) }
		}

		@ $mol_mem
		value(next?: GeolocationPosition) {
			this.watcher()
			return next ?? null
		}

		@ $mol_mem
		error(next?: GeolocationPositionError) {
			this.watcher()
			return next ?? null
		}

		accuracy() {
			return this.value()?.coords?.accuracy
		}

		altitude() {
			return this.value()?.coords?.altitude
		}

		altitudeAccuracy() {
			return this.value()?.coords?.altitudeAccuracy
		}

		heading() {
			return this.value()?.coords?.heading
		}

		latitude() {
			return this.value()?.coords?.latitude
		}

		longitude() {
			return this.value()?.coords?.longitude
		}

		speed() {
			return this.value()?.coords?.speed
		}

		timestamp() {
			return this.value()?.timestamp
		}
		
	}

	export class $hype_escape_map extends $.$hype_escape_map {

		@ $mol_memo.field
        get $() {
          return super.$.$mol_ambient({
            $hyoo_map_pane: $hype_escape_pane as any,
          })
        }
		
		@ $mol_mem
		position() {
			return new Position
		}

		@ $mol_mem
		position_x() {
			return this.position().longitude() ?? 0
		}

		@ $mol_mem
		position_y() {
			return this.position().latitude() ?? 0
		}
		
	}
}
