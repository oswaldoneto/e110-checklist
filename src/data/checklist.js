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
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist; 