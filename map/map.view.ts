namespace $.$$ {
	export class $hype_escape_map extends $.$hype_escape_map {

		@ $mol_memo.field
        get $() {
          return super.$.$mol_ambient({
            $hyoo_map_pane: $hype_escape_pane as any,
          })
        }
		
		getCurrentPositioin(): Promise<GeolocationPosition> {
			return new Promise<GeolocationPosition>((res, rej) => {
				this.$.$mol_dom_context.navigator.geolocation.getCurrentPosition(res, rej, { enableHighAccuracy: true })
			})
		}

		@ $mol_mem
		position_x() {
			return this.position().coords.longitude
		}

		@ $mol_mem
		position_y() {
			return this.position().coords.latitude
		}

		position() {
			const res = $mol_wire_sync( this ).getCurrentPositioin() as GeolocationPosition
			console.log(res)
			return res
		}

		@ $mol_mem
		position_now(next?: GeolocationPosition) {
			return next
		}
		
	}
}
