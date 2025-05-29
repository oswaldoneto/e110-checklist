const checklist = {
  FLIGHT_PHASES: {
    "COCKPIT_INSPECTION": {
      id: "phase_cockpit_inspection",
      items: {
        STBY_PWR_SWITCH: { id: "cockpit_inspection_stby_pwr_switch", title: "STBY PWR SWITCH", value: "TEST AND HOLD / ON" },
        EMER_LTS_SWITCH: { id: "cockpit_inspection_emer_lts_switch", title: "EMER LTS SWITCH", value: "ARM" },
        LANDING_GEAR_HANDLE: { id: "cockpit_inspection_landing_gear_handle", title: "LANDING GEAR HANDLE", value: "DOWN" },
        BATT_BUTTONS: { id: "cockpit_inspection_batt_buttons", title: "BATT BUTTONS (BOTH)", value: "ON, CHECK VOLTS" },
        EIS_CAS: { id: "cockpit_inspection_eis_cas", title: "EIS / CAS", value: "CHECK" },
        EXTERNAL_POWER: { id: "cockpit_inspection_external_power", title: "EXTERNAL POWER SOURCE", value: "AS DESIRED" },
        APU_KNOB: { id: "cockpit_inspection_apu_knob", title: "APU KNOB", value: "ON / START" },
        EXTERIOR_INTERIOR_LIGHTS: { id: "cockpit_inspection_exterior_interior_lights", title: "EXTERIOR / INTERIOR LIGHTS", value: "AS REQUIRED" }
      }
    },
    "COCKPIT_PREPARATION": {
      id: "phase_cockpit_preparation",
      items: {
        SET_WEIGHT_FUEL: { id: "cockpit_preparation_set_weight_fuel", title: "SET WEIGHT AND FUEL", value: "SET" },
        ENTER_FLIGHT_PLAN: { id: "cockpit_preparation_enter_flight_plan", title: "ENTER FLIGHT PLAN", value: "ENTER" },
        SET_TAKEOFF_DATA: { id: "cockpit_preparation_set_takeoff_data", title: "SET TAKEOFF DATA", value: "SET" },
        COCKPIT_INSPECTION_COMPLETE: { id: "cockpit_preparation_cockpit_inspection_complete", title: "COCKPIT INSPECTION", value: "COMPLETE" },
        EIS_CAS: { id: "cockpit_preparation_eis_cas", title: "EIS / CAS", value: "CHECK" },
        APU_KNOB: { id: "cockpit_preparation_apu_knob", title: "APU KNOB", value: "ON / START" },
        EXTERNAL_POWER: { id: "cockpit_preparation_external_power", title: "EXTERNAL POWER (IF USED)", value: "DISCONNECTED" },
        ENGINE_DRY_MOTOR: { id: "cockpit_preparation_engine_dry_motor", title: "ENGINE DRY MOTOR", value: "CONSIDER" },
        ATIS_CLEARANCE: { id: "cockpit_preparation_atis_clearance", title: "ATIS / CLEARANCE", value: "AS REQUIRED" },
        TRIMS: { id: "cockpit_preparation_trims", title: "TRIMS", value: "CHECK / SET FOR TAKEOFF" },
        WEIGHT_FUEL: { id: "cockpit_preparation_weight_fuel", title: "WEIGHT AND FUEL", value: "CONFIRMED" },
        TAKEOFF_DATA: { id: "cockpit_preparation_takeoff_data", title: "TAKEOFF DATA", value: "COMPLETED" },
        V_SPEEDS: { id: "cockpit_preparation_v_speeds", title: "V SPEEDS", value: "VERIFY / SET" },
        PRESSURIZATION_LDG_ELEV: { id: "cockpit_preparation_pressurization_ldg_elev", title: "PRESSURIZATION LDG ELEV", value: "VERIFY / SET" },
        FUEL_QUANTITY_BALANCE: { id: "cockpit_preparation_fuel_quantity_balance", title: "FUEL QUANTITY AND BALANCE", value: "CHECK" },
        AUTOPILOT: { id: "cockpit_preparation_autopilot", title: "AUTOPILOT (FIRST FLIGHT OF DAY)", value: "ON / OFF" }
      }
    },
    "BEFORE_START": {
      id: "phase_before_start",
      items: {
        EMER_PARK_BRAKE_HANDLE: { id: "before_start_emer_park_brake_handle", title: "EMER / PARK BRAKE HANDLE", value: "SET" },
        EIS_CAS: { id: "before_start_eis_cas", title: "EIS / CAS", value: "CHECK" }
      }
    },
    "STARTING_ENGINES": {
      id: "phase_starting_engines",
      items: {
        THROTTLES: { id: "starting_engines_throttles", title: "THROTTLES", value: "IDLE" },
        ENGINE_RUN_STOP_BUTTON: { id: "starting_engines_engine_run_stop_button", title: "ENGINE RUN / STOP BUTTON", value: "RUN (EITHER ENGINE)" },
        START_PRESSURE: { id: "starting_engines_start_pressure", title: "START PRESSURE", value: "VERIFY ≥ 32 PSI" },
        ENGINE_STARTER_BUTTON: { id: "starting_engines_engine_starter_button", title: "ENGINE STARTER BUTTON", value: "PUSH" },
        ENGINE_INSTRUMENTS: { id: "starting_engines_engine_instruments", title: "ENGINE INSTRUMENTS", value: "MONITOR" },
        EIS_CAS: { id: "starting_engines_eis_cas", title: "EIS / CAS", value: "CHECK" }
      }
    },
    "BEFORE_TAXI": {
      id: "phase_before_taxi",
      items: {
        FLIGHT_CONTROLS: { id: "before_taxi_flight_controls", title: "FLIGHT CONTROLS", value: "CHECK" },
        SPEEDBRAKES: { id: "before_taxi_speedbrakes", title: "SPEEDBRAKES", value: "CHECK / RETRACTED" },
        FLAPS: { id: "before_taxi_flaps", title: "FLAPS", value: "SET FOR TAKEOFF" },
        FLIGHT_INSTRUMENTS_AVIONICS: { id: "before_taxi_flight_instruments_avionics", title: "FLIGHT INSTRUMENTS / AVIONICS", value: "CHECK" },
        ALTIMETERS: { id: "before_taxi_altimeters", title: "ALTIMETERS", value: "CONFIRM & COMPARE" },
        ENGINE_ICE_PROTECTION: { id: "before_taxi_engine_ice_protection", title: "ENGINE ICE PROTECTION BUTTONS", value: "AS RQRD" }
      }
    },
    "TAXI": {
      id: "phase_taxi",
      items: {
        EXTERIOR_LIGHTS: { id: "taxi_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" },
        EMER_PARK_BRAKE_HANDLE: { id: "taxi_emer_park_brake_handle", title: "EMER / PARK BRAKE HANDLE", value: "STOWED" },
        BRAKES: { id: "taxi_brakes", title: "BRAKES", value: "CHECK" },
        NOSEWHEEL_STEERING: { id: "taxi_nosewheel_steering", title: "NOSEWHEEL STEERING", value: "CHECK" },
        THRUST_REVERSERS: { id: "taxi_thrust_reversers", title: "THRUST REVERSERS", value: "CHECK, AS REQUIRED" }
      }
    },
    "BEFORE_TAKEOFF": {
      id: "phase_before_takeoff",
      items: {
        FLAPS: { id: "before_takeoff_flaps", title: "FLAPS", value: "SET FOR TAKEOFF" },
        SPEEDBRAKES: { id: "before_takeoff_speedbrakes", title: "SPEEDBRAKES", value: "RETRACTED" },
        TRIMS: { id: "before_takeoff_trims", title: "TRIMS", value: "SET FOR TAKEOFF" },
        ICE_PROTECTION_SYSTEMS: { id: "before_takeoff_ice_protection_systems", title: "ICE PROTECTION SYSTEMS", value: "CHECK, AS RQRD" },
        V_SPEEDS: { id: "before_takeoff_v_speeds", title: "V SPEEDS", value: "DISPLAYED" },
        SPD_KNOB: { id: "before_takeoff_spd_knob", title: "SPD KNOB", value: "FMS" },
        CREW_BRIEFING: { id: "before_takeoff_crew_briefing", title: "CREW BRIEFING", value: "COMPLETE" },
        RADAR: { id: "before_takeoff_radar", title: "RADAR", value: "AS REQUIRED" },
        PITOT_STATIC_BUTTON: { id: "before_takeoff_pitot_static_button", title: "PITOT / STATIC BUTTON", value: "ON 15 SEC THEN NORM" },
        FLIGHT_CONTROLS: { id: "before_takeoff_flight_controls", title: "FLIGHT CONTROLS", value: "FREE" },
        ICE_PROTECTION_SYSTEMS_2: { id: "before_takeoff_ice_protection_systems_2", title: "ICE PROTECTION SYSTEMS", value: "AS REQUIRED" },
        EXTERIOR_LIGHTS: { id: "before_takeoff_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" },
        EIS_CAS: { id: "before_takeoff_eis_cas", title: "EIS / CAS", value: "CHECK" }
      }
    },
    "TAKEOFF": {
      id: "phase_takeoff",
      items: {
        TIMER: { id: "takeoff_timer", title: "TIMER", value: "SET" },
        STATIC_TAKEOFF_THROTTLES: { id: "takeoff_static_throttles", title: "THROTTLES (STATIC)", value: "TO AUTOTHROTTLE (IF USED)" },
        STATIC_TAKEOFF_EIS_CAS: { id: "takeoff_static_eis_cas", title: "EIS / CAS (STATIC)", value: "CHECK" },
        STATIC_TAKEOFF_BRAKES: { id: "takeoff_static_brakes", title: "BRAKES (STATIC)", value: "RELEASE" },
        STATIC_TAKEOFF_ELEVATOR: { id: "takeoff_static_elevator", title: "ELEVATOR CONTROL (STATIC)", value: "ROTATE AT VR" },
        ROLLING_TAKEOFF_BRAKES: { id: "takeoff_rolling_brakes", title: "BRAKES (ROLLING)", value: "RELEASE" },
        ROLLING_TAKEOFF_THROTTLES: { id: "takeoff_rolling_throttles", title: "THROTTLES (ROLLING)", value: "TO" },
        ROLLING_TAKEOFF_AUTOTHROTTLE: { id: "takeoff_rolling_autothrottle", title: "AUTOTHROTTLE (ROLLING)", value: "CHECK GREEN HOLD" },
        ROLLING_TAKEOFF_EIS_CAS: { id: "takeoff_rolling_eis_cas", title: "EIS / CAS (ROLLING)", value: "CHECK" },
        ROLLING_TAKEOFF_ELEVATOR: { id: "takeoff_rolling_elevator", title: "ELEVATOR CONTROL (ROLLING)", value: "ROTATE AT VR" }
      }
    },
    "AFTER_TAKEOFF_CLIMB": {
      id: "phase_after_takeoff_climb",
      items: {
        LANDING_GEAR: { id: "after_takeoff_climb_landing_gear", title: "LANDING GEAR", value: "UP" },
        FLAPS: { id: "after_takeoff_climb_flaps", title: "FLAPS", value: "UP" },
        THROTTLES: { id: "after_takeoff_climb_throttles", title: "THROTTLES", value: "CLB" },
        ICE_PROTECTION_BUTTONS: { id: "after_takeoff_climb_ice_protection_buttons", title: "ICE PROTECTION BUTTONS", value: "AS REQUIRED" },
        PRESSURIZATION: { id: "after_takeoff_climb_pressurization", title: "PRESSURIZATION", value: "CHECK" },
        ALTIMETERS: { id: "after_takeoff_climb_altimeters", title: "ALTIMETERS", value: "SET" },
        EXTERIOR_LIGHTS: { id: "after_takeoff_climb_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" },
        APU_KNOB: { id: "after_takeoff_climb_apu_knob", title: "APU KNOB", value: "OFF" }
      }
    },
    "CRUISE": {
      id: "phase_cruise",
      items: {
        THROTTLES: { id: "cruise_throttles", title: "THROTTLES", value: "CRU OR AS DESIRED" },
        AUTOPILOT: { id: "cruise_autopilot", title: "AUTOPILOT", value: "AS REQUIRED" },
        DESCENT_PREPARATION: { id: "cruise_descent_preparation", title: "DESCENT PREPARATION", value: "SET LANDING DATA" }
      }
    },
    "DESCENT": {
      id: "phase_descent",
      items: {
        PRESSURIZATION_LDG_ELEV: { id: "descent_pressurization_ldg_elev", title: "PRESSURIZATION LDG ELEV", value: "VERIFY" },
        APU_KNOB: { id: "descent_apu_knob", title: "APU KNOB", value: "OFF" },
        ALTIMETERS: { id: "descent_altimeters", title: "ALTIMETERS", value: "SET" },
        EXTERIOR_LIGHTS: { id: "descent_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" }
      }
    },
    "APPROACH": {
      id: "phase_approach",
      items: {
        LANDING_DATA: { id: "approach_landing_data", title: "LANDING DATA", value: "CONFIRM" },
        V_SPEEDS: { id: "approach_v_speeds", title: "V SPEEDS", value: "SET" },
        ICE_PROTECTION_BUTTONS: { id: "approach_ice_protection_buttons", title: "ICE PROTECTION BUTTONS", value: "AS REQUIRED" },
        FMS_NAV_AIDS: { id: "approach_fms_nav_aids", title: "FMS / NAVIGATION AIDS", value: "SET, AS REQUIRED" },
        MINIMUMS: { id: "approach_minimums", title: "MINIMUMS", value: "SET" },
        ALTIMETERS: { id: "approach_altimeters", title: "ALTIMETERS", value: "VERIFY SETTING" },
        CREW_BRIEFING: { id: "approach_crew_briefing", title: "CREW BRIEFING", value: "COMPLETE" },
        FLAPS: { id: "approach_flaps", title: "FLAPS", value: "1 OR 2, AS DESIRED" }
      }
    },
    "BEFORE_LANDING": {
      id: "phase_before_landing",
      items: {
        LANDING_GEAR: { id: "before_landing_landing_gear", title: "LANDING GEAR", value: "DOWN (3 GREEN)" },
        FLAPS: { id: "before_landing_flaps", title: "FLAPS", value: "FULL" },
        EXTERIOR_LIGHTS: { id: "before_landing_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" },
        SPEEDBRAKES: { id: "before_landing_speedbrakes", title: "SPEEDBRAKES", value: "RETRACTED" },
        EIS_CAS: { id: "before_landing_eis_cas", title: "EIS / CAS", value: "CHECK" },
        AUTOPILOT: { id: "before_landing_autopilot", title: "AUTOPILOT", value: "DISENGAGE" },
        AIRSPEED_MINIMUM: { id: "before_landing_airspeed_minimum", title: "AIRSPEED (MINIMUM)", value: "VREF" }
      }
    },
    "LANDING": {
      id: "phase_landing",
      items: {
        AUTOTHROTTLE: { id: "landing_autothrottle", title: "AUTOTHROTTLE (IF USED)", value: "CHECK" },
        THROTTLES: { id: "landing_throttles", title: "THROTTLES", value: "IDLE" },
        BRAKES: { id: "landing_brakes", title: "BRAKES (AFTER NOSEWHEEL DOWN)", value: "APPLY" },
        THRUST_REVERSERS: { id: "landing_thrust_reversers", title: "THRUST REVERSERS", value: "DEPLOY" }
      }
    },
    "GO_AROUND": {
      id: "phase_go_around",
      items: {
        TO_GA_BUTTON: { id: "go_around_to_ga_button", title: "TO / GA BUTTON", value: "PUSH" },
        THROTTLES: { id: "go_around_throttles", title: "THROTTLES", value: "ADVANCE" },
        PITCH_ATTITUDE: { id: "go_around_pitch_attitude", title: "PITCH ATTITUDE", value: "7.5 DEGREES UP INITIALLY" },
        FLAPS: { id: "go_around_flaps", title: "FLAPS", value: "2" },
        CLIMB_SPEED: { id: "go_around_climb_speed", title: "CLIMB SPEED", value: "VAPP (MINIMUM)" },
        LANDING_GEAR: { id: "go_around_landing_gear", title: "LANDING GEAR (POSITIVE RATE)", value: "UP" },
        FLAPS_2: { id: "go_around_flaps_2", title: "FLAPS (≥ VAPP + 10 KNOTS)", value: "UP" },
        SPD_KNOB: { id: "go_around_spd_knob", title: "SPD KNOB", value: "FMS" },
        THROTTLES_2: { id: "go_around_throttles_2", title: "THROTTLES", value: "AS REQUIRED" }
      }
    },
    "AFTER_LANDING": {
      id: "phase_after_landing",
      items: {
        THRUST_REVERSERS: { id: "after_landing_thrust_reversers", title: "THRUST REVERSERS", value: "STOW" },
        FLAPS: { id: "after_landing_flaps", title: "FLAPS", value: "AS DESIRED" },
        ICE_PROTECTION: { id: "after_landing_ice_protection", title: "ICE PROTECTION", value: "AS REQUIRED" },
        EXTERIOR_LIGHTS: { id: "after_landing_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" }
      }
    },
    "SHUTDOWN": {
      id: "phase_shutdown",
      items: {
        THROTTLES: { id: "shutdown_throttles", title: "THROTTLES", value: "IDLE" },
        EMER_PARK_BRAKE_HANDLE: { id: "shutdown_emer_park_brake_handle", title: "EMER / PARK BRAKE HANDLE", value: "SET" },
        ICE_PROTECTION: { id: "shutdown_ice_protection", title: "ICE PROTECTION", value: "OFF" },
        ENGINE_RUN_STOP_BUTTONS: { id: "shutdown_engine_run_stop_buttons", title: "ENGINE RUN / STOP BUTTONS", value: "OFF" },
        EMER_LTS_SWITCH: { id: "shutdown_emer_lts_switch", title: "EMER LTS SWITCH", value: "OFF" },
        STBY_PWR_SWITCH: { id: "shutdown_stby_pwr_switch", title: "STBY PWR SWITCH", value: "OFF" },
        APU_KNOB: { id: "shutdown_apu_knob", title: "APU KNOB", value: "OFF" },
        EXTERIOR_LIGHTS: { id: "shutdown_exterior_lights", title: "EXTERIOR LIGHTS", value: "OFF" },
        BATT_BUTTONS: { id: "shutdown_batt_buttons", title: "BATT BUTTONS", value: "OFF" }
      }
    },
    "QUICK_TURN": {
      id: "phase_quick_turn",
      items: {
        THROTTLES: { id: "quick_turn_throttles", title: "THROTTLES", value: "IDLE" },
        EMER_PARK_BRAKE_HANDLE: { id: "quick_turn_emer_park_brake_handle", title: "EMER / PARK BRAKE HANDLE", value: "SET" },
        ICE_PROTECTION: { id: "quick_turn_ice_protection", title: "ICE PROTECTION", value: "OFF" },
        ENGINE_RUN_STOP_BUTTONS: { id: "quick_turn_engine_run_stop_buttons", title: "ENGINE RUN / STOP BUTTONS", value: "OFF" },
        EXTERIOR_LIGHTS: { id: "quick_turn_exterior_lights", title: "EXTERIOR LIGHTS", value: "AS REQUIRED" },
        EXTERNAL_POWER_SOURCE: { id: "quick_turn_external_power_source", title: "EXTERNAL POWER SOURCE", value: "AS DESIRED" }
      }
    },
    "ENGINE_DRY_MOTOR": {
      id: "phase_engine_dry_motor",
      items: {
        THROTTLE_AFFECTED_SIDE: { id: "engine_dry_motor_throttle_affected_side", title: "THROTTLE (AFFECTED SIDE)", value: "IDLE" },
        ENGINE_RUN_STOP_AFFECTED_SIDE: { id: "engine_dry_motor_engine_run_stop_affected_side", title: "ENGINE RUN/STOP (AFFECTED SIDE)", value: "STOP" },
        ENGINE_STARTER_AFFECTED_SIDE: { id: "engine_dry_motor_engine_starter_affected_side", title: "ENGINE STARTER (AFFECTED SIDE)", value: "PUSH & HOLD" }
      }
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist; 