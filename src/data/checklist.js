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
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist; 