const checklist = {
  FLIGHT_PHASES: {
    "INSPECTION": {
      id: "phase_inspection",
      items: {
        PARKING_BRAKE: { id: "inspection_parking_brake", title: "PARKING BRAKE", value: "ON" },
        OUTSIDE_INSPECTION: { id: "inspection_outside_inspection", title: "OUTSIDE INSPECTION", value: "DONE" },
        DOORS: { id: "inspection_doors", title: "DOORS", value: "LOCKED" },
        PASSENGER_OXYGEN_SWITCH: { id: "inspection_passenger_oxygen_switch", title: "PASSENGER OXYGEN SWITCH", value: "STBY" },
        OXYGEN_MASTER_SWITCH: { id: "inspection_oxygen_master_switch", title: "OXYGEN MASTER SWITCH", value: "ON" },
        CREW_OXYGEN_MASKS: { id: "inspection_crew_oxygen_masks", title: "CREW OXYGEN MASKS", value: "TESTED" },
        EXT_AND_INT_LIGHTS: { id: "inspection_ext_and_int_lights", title: "EXT. & INT. LIGHTS", value: "OFF" },
        CRASH_LEVER: { id: "inspection_crash_lever", title: "CRASH LEVER", value: "DOWN" },
        STARTER: { id: "inspection_starter", title: "STARTER", value: "OFF" },
        IGNITION: { id: "inspection_ignition", title: "IGNITION", value: "AUTO" },
        AUX_BP: { id: "inspection_aux_bp", title: "AUX BP", value: "OFF" },
        FUEL_SEL: { id: "inspection_fuel_sel", title: "FUEL SEL", value: "MAN" },
        AP_TRIMS: { id: "inspection_ap_trims", title: "AP / TRIMS", value: "OFF" },
        AC: { id: "inspection_ac", title: "A/C (AIR CONDITIONING)", value: "OFF" },
        CB_LIGHTS: { id: "inspection_cb_lights", title: "CB LIGHTS", value: "OFF" },
        MICRO_MASK: { id: "inspection_micro_mask", title: "MICRO/MASK", value: "MICRO/GUARDED" },
        DE_ICE_SYSTEMS: { id: "inspection_de_ice_systems", title: "DE-ICE SYSTEMS", value: "ALL OFF" },
        INERT_SEP: { id: "inspection_inert_sep", title: "INERT SEP", value: "OFF" },
        LANDING_GEAR_LEVER: { id: "inspection_landing_gear_lever", title: "LANDING GEAR LEVER", value: "DOWN" },
        DUMP: { id: "inspection_dump", title: "DUMP", value: "NORM/GUARDED" },
        BLEED: { id: "inspection_bleed", title: "BLEED", value: "OFF" },
        HOT_AIR_FLOW: { id: "inspection_hot_air_flow", title: "HOT AIR FLOW", value: "FLOOR" },
        MAN_OVRD: { id: "inspection_man_ovrd", title: "MAN OVRD", value: "OFF" },
        THROTTLE: { id: "inspection_throttle", title: "THROTTLE", value: "CUT OFF" },
        FUEL_TANK_SELECTOR: { id: "inspection_fuel_tank_selector", title: "FUEL TANK SELECTOR", value: "OPEN / L or R" },
        ALT_STATIC_SOURCE: { id: "inspection_alt_static_source", title: "ALT. STATIC SOURCE", value: "NORMAL (PUSHED)" },
        EMERGENCY_RAM_AIR: { id: "inspection_emergency_ram_air", title: "EMERGENCY RAM AIR", value: "CLOSED (PUSHED)" },
        ESS_BUS_TIE_SWITCH: { id: "inspection_ess_bus_tie_switch", title: "ESS. BUS TIE SWITCH", value: "NORM/GUARDED" },
        CIRCUIT_BREAKERS: { id: "inspection_circuit_breakers", title: "CIRCUIT BREAKERS", value: "ALL IN" },
        EMERGENCY_LANDING_GEAR_CONTROL: { id: "inspection_emergency_landing_gear_control", title: "EMERGENCY LANDING GEAR CONTROL", value: "CHECK" }
      }
    },
    "BEFORE_STARTING_ENGINE": {
      id: "phase_before_starting_engine",
      items: {
        CRASH_LEVER: { id: "before_starting_engine_crash_lever", title: "CRASH LEVER", value: "UP" },
        SOURCE: { id: "before_starting_engine_source", title: "SOURCE", value: "BAT (or GPU)" },
        MFD: { id: "before_starting_engine_mfd", title: "MFD", value: "INITIALISED" },
        MFD_FLIGHT_PLAN: { id: "before_starting_engine_mfd_flight_plan", title: "MFD / FLIGHT PLAN", value: "SET or CHECK" },
        NAV_COM: { id: "before_starting_engine_nav_com", title: "NAV COM", value: "SET XPDR COM1" },
        ATC_CLEARANCE: { id: "before_starting_engine_atc_clearance", title: "ATC CLEARANCE", value: "Copied / as required" },
        GENERATOR: { id: "before_starting_engine_generator", title: "GENERATOR", value: "MAIN" },
        AUDIO_ALARMS: { id: "before_starting_engine_audio_alarms", title: "AUDIO ALARMS", value: "TEST" },
        DE_ICE_SYSTEM_LIGHTS: { id: "before_starting_engine_de_ice_system_lights", title: "DE-ICE SYSTEM LIGHTS", value: "TEST" },
        LANDING_GEAR_LIGHTS: { id: "before_starting_engine_landing_gear_lights", title: "LANDING GEAR LIGHTS", value: "TEST / 3-GREEN" },
        FUEL_ON_BOARD: { id: "before_starting_engine_fuel_on_board", title: "FUEL ON BOARD", value: "CHECK" },
        RESIDUAL_ITT: { id: "before_starting_engine_residual_itt", title: "RESIDUAL ITT (motoring if ITT > 150°C)", value: "CHECK" },
        VOLTAGE: { id: "before_starting_engine_voltage", title: "VOLTAGE: BAT > 24.5 V / GPU ~ 28 V", value: "CHECK" },
        CAS: { id: "before_starting_engine_cas", title: "CAS (CREW ALERTING SYSTEM)", value: "CHECK" },
        ALTIMETER: { id: "before_starting_engine_altimeter", title: "ALTIMETER", value: "SET" }
      }
    },
    "ENGINE_START": {
      id: "phase_engine_start",
      items: {
        STROBE_LIGHTS: { id: "engine_start_strobe_lights", title: "STROBE LIGHTS", value: "ON" },
        PUSH_BACK: { id: "engine_start_push_back", title: "PUSH BACK", value: "AS REQ." },
        IGNITION: { id: "engine_start_ignition", title: "IGNITION", value: "AUTO" },
        AUX_BP: { id: "engine_start_aux_bp", title: "AUX BP", value: "ON" },
        CAS_MSG: { id: "engine_start_cas_msg", title: "CAS MSG \"AUX BOOST PMP ON\"", value: "CHECK" },
        PROP_AREA: { id: "engine_start_prop_area", title: "PROP AREA", value: "CLEAR" },
        THROTTLE: { id: "engine_start_throttle", title: "THROTTLE", value: "IDLE" },
        STARTER: { id: "engine_start_starter", title: "STARTER", value: "ON (2\" then OFF)" }
      }
    },
    "AFTER_ENGINE_START": {
      id: "phase_after_engine_start",
      items: {
        SOURCE: { id: "after_engine_start_source", title: "SOURCE (if GPU used)", value: "BAT" },
        GPU: { id: "after_engine_start_gpu", title: "GPU (if used)", value: "DISCONNECT" },
        CAS_GPU_DOOR: { id: "after_engine_start_cas_gpu_door", title: "CAS \"GPU DOOR\"", value: "OFF" },
        THROTTLE: { id: "after_engine_start_throttle", title: "THROTTLE", value: "LO-IDLE → HIGH-IDLE" },
        NG: { id: "after_engine_start_ng", title: "NG 70% (±2%)", value: "CHECK" },
        OIL_PRESS_TEMP: { id: "after_engine_start_oil_press_temp", title: "OIL PRESS. / TEMP.", value: "CHECK" },
        AUX_BP: { id: "after_engine_start_aux_bp", title: "AUX BP", value: "AUTO" },
        FUEL_SEL: { id: "after_engine_start_fuel_sel", title: "FUEL SEL", value: "AUTO" },
        FUEL_SEL_SHIFT_BUTTON: { id: "after_engine_start_fuel_sel_shift_button", title: "FUEL SEL SHIFT BUTTON", value: "TEST" },
        AP_TRIMS: { id: "after_engine_start_ap_trims", title: "AP / TRIMS", value: "ON" },
        GENERATOR: { id: "after_engine_start_generator", title: "GENERATOR", value: "ST-BY / CHECK VOLTAGE" },
        DE_ICE: { id: "after_engine_start_de_ice", title: "DE-ICE (If icing cond.)", value: "AS REQUIRED" },
        AC: { id: "after_engine_start_ac", title: "A/C", value: "AUTO" },
        TEMP_HOT_AIR_FLOW: { id: "after_engine_start_temp_hot_air_flow", title: "TEMP / HOT AIR FLOW", value: "AS REQUIRED" },
        BLEED: { id: "after_engine_start_bleed", title: "BLEED", value: "AUTO (or MAX DIFF)" }
      }
    },
    "BEFORE_TAXIING": {
      id: "phase_before_taxiing",
      items: {
        TAXI_CLEARANCE: { id: "before_taxiing_taxi_clearance", title: "TAXI CLEARANCE", value: "OBTAIN" },
        INERT_SEP: { id: "before_taxiing_inert_sep", title: "INERT SEP", value: "ON" },
        FLIGHT_CONTROLS_TRIMS: { id: "before_taxiing_flight_controls_trims", title: "FLIGHT CONTROLS / TRIMS", value: "TEST" },
        FLAPS: { id: "before_taxiing_flaps", title: "FLAPS", value: "UP" },
        THROTTLE: { id: "before_taxiing_throttle", title: "THROTTLE", value: "FEATHER TWICE" },
        EIS: { id: "before_taxiing_eis", title: "EIS (ENGINE INDICATION SYSTEM)", value: "CHECK" },
        CAS: { id: "before_taxiing_cas", title: "CAS", value: "CHECK" },
        TAXI_LIGHT: { id: "before_taxiing_taxi_light", title: "TAXI LIGHT", value: "ON" },
        NAV_LIGHTS: { id: "before_taxiing_nav_lights", title: "NAV LIGHTS", value: "ON" },
        PARKING_BRAKE: { id: "before_taxiing_parking_brake", title: "PARKING BRAKE", value: "OFF" }
      }
    },
    "BEFORE_LINE_UP": {
      id: "phase_before_line_up",
      items: {
        TAKE_OFF_CLEARANCE: { id: "before_line_up_take_off_clearance", title: "TAKE OFF CLEARANCE", value: "OBTAIN" },
        LDG_LIGHTS: { id: "before_line_up_ldg_lights", title: "LDG LIGHTS", value: "ON" },
        STROBES: { id: "before_line_up_strobes", title: "STROBES", value: "ON" },
        IGNITION: { id: "before_line_up_ignition", title: "IGNITION", value: "AUTO (IF HEAVY RAIN)" },
        AUX_BP: { id: "before_line_up_aux_bp", title: "AUX BP", value: "AUTO" },
        FUEL_SEL: { id: "before_line_up_fuel_sel", title: "FUEL SEL", value: "AUTO" },
        DE_ICE_SYSTEMS: { id: "before_line_up_de_ice_systems", title: "DE-ICE SYSTEMS", value: "AS REQUIRED" },
        PITOT_L_R_STALL_HTR: { id: "before_line_up_pitot_l_r_stall_htr", title: "PITOT L / PITOT R & STALL HTR", value: "ON" },
        TRIMS: { id: "before_line_up_trims", title: "TRIMS", value: "SET FOR TO" },
        FLAPS: { id: "before_line_up_flaps", title: "FLAPS", value: "TO" },
        AC: { id: "before_line_up_ac", title: "A/C", value: "AS REQUIRED" },
        BLEED: { id: "before_line_up_bleed", title: "BLEED", value: "AUTO OR MAX DIFF" },
        FUEL_GAGES: { id: "before_line_up_fuel_gages", title: "FUEL GAGES", value: "CHECK" },
        AMMETER: { id: "before_line_up_ammeter", title: "AMMETER (< 50 AMP)", value: "CHECK" },
        EIS_CAS: { id: "before_line_up_eis_cas", title: "EIS & CAS", value: "CHECK" },
        ALTIMETER: { id: "before_line_up_altimeter", title: "ALTIMETER", value: "SET / CHECK" },
        AP_ALT_SEL: { id: "before_line_up_ap_alt_sel", title: "AP → ALT SEL", value: "AS REQUIRED" },
        AP_VS_FLC: { id: "before_line_up_ap_vs_flc", title: "AP → VS or FLC", value: "AS REQUIRED" },
        AP_HDG_NAV: { id: "before_line_up_ap_hdg_nav", title: "AP → HDG or NAV", value: "AS REQUIRED" }
      }
    },
    "AFTER_TAKEOFF": {
      id: "phase_after_takeoff",
      items: {
        LANDING_GEAR: { id: "after_takeoff_landing_gear", title: "LANDING GEAR", value: "UP" },
        FLAPS: { id: "after_takeoff_flaps", title: "FLAPS", value: "UP" },
        CLIMB_SPEED: { id: "after_takeoff_climb_speed", title: "CLIMB SPEED", value: "124 KIAS (Vy)" },
        AP_YAW_DAMPER: { id: "after_takeoff_ap_yaw_damper", title: "AP → YAW DAMPER", value: "ON" },
        AP: { id: "after_takeoff_ap", title: "AP", value: "AS REQUIRED" },
        EIS_CAS: { id: "after_takeoff_eis_cas", title: "EIS / CAS", value: "CHECK" },
        DE_ICE_SYSTEMS: { id: "after_takeoff_de_ice_systems", title: "DE-ICE SYSTEMS", value: "AS REQUIRED" },
        INERT_SEP: { id: "after_takeoff_inert_sep", title: "INERT SEP", value: "AS REQUIRED" }
      }
    },
    "CLIMB": {
      id: "phase_climb",
      items: {
        CLIMB_SPEED: { id: "climb_climb_speed", title: "CLIMB SPEED", value: "124 KIAS (Vy) – 170 KIAS" },
        ALT_SEL: { id: "climb_alt_sel", title: "ALT SEL", value: "CHECK" },
        AUTOPILOT: { id: "climb_autopilot", title: "AUTOPILOT", value: "CHECK" },
        TRQ_ITT_NG: { id: "climb_trq_itt_ng", title: "TRQ / ITT / NG", value: "CHECK" },
        EIS: { id: "climb_eis", title: "EIS", value: "CHECK" },
        CAS: { id: "climb_cas", title: "CAS", value: "CHECK" },
        PRESSURIZATION: { id: "climb_pressurization", title: "PRESSURIZATION", value: "CHECK" },
        FUEL_GAGES: { id: "climb_fuel_gages", title: "FUEL GAGES", value: "CHECK" },
        VOLTMETER_AMMETER: { id: "climb_voltmeter_ammeter", title: "VOLT METER / AMMETER", value: "CHECK" },
        DE_ICE_SYSTEMS: { id: "climb_de_ice_systems", title: "DE-ICE SYSTEMS", value: "AS REQUIRED" },
        INERT_SEP: { id: "climb_inert_sep", title: "INERT SEP", value: "AS REQUIRED" },
        LANDING_LIGHT: { id: "climb_landing_light", title: "LANDING LIGHT", value: "OFF after FL100" },
        ALTIMETER: { id: "climb_altimeter", title: "ALTIMETER", value: "SET STANDARD (29.92)" }
      }
    },
    "CRUISE & BEFORE DESCENT": {
      id: "phase_cruise_before_descent",
      items: {
        APPROACH_PROC: { id: "cruise_approach_proc", title: "APPROACH PROC", value: "CHECK" },
        ALTIMETER_SETTING: { id: "cruise_altimeter_setting", title: "ALTIMETER SETTING", value: "CHECK" },
        PRESSURIZATION: { id: "cruise_pressurization", title: "PRESSURIZATION", value: "CHECK" },
        FUEL_GAGES: { id: "cruise_fuel_gages", title: "FUEL GAGES", value: "CHECK" },
        VOLTMETER_AMMETER: { id: "cruise_voltmeter_ammeter", title: "VOLT METER / AMMETER", value: "CHECK" },
        DE_ICE_SYSTEMS: { id: "cruise_de_ice_systems", title: "DE-ICE SYSTEMS", value: "AS REQUIRED" },
        INERT_SEP: { id: "cruise_inert_sep", title: "INERT SEP", value: "AS REQUIRED" }
      }
    },
    "RUNWAY CLEAR": {
      id: "phase_runway_clear",
      items: {
        LIGHTS: { id: "runway_clear_lights", title: "LIGHTS", value: "TAXI" },
        DE_ICE_SYSTEMS: { id: "runway_clear_de_ice_systems", title: "DE-ICE SYSTEMS", value: "ALL OFF" },
        INERT_SEP: { id: "runway_clear_inert_sep", title: "INERT SEP", value: "ON" },
        TRIMS: { id: "runway_clear_trims", title: "TRIMS", value: "RESET" },
        FLAPS: { id: "runway_clear_flaps", title: "FLAPS", value: "UP" },
        AC: { id: "runway_clear_ac", title: "A/C", value: "AS REQUIRED" },
        TRANSPONDER: { id: "runway_clear_transponder", title: "TRANSPONDER « GND »", value: "CHECK" },
        WX_RADAR: { id: "runway_clear_wx_radar", title: "WX RADAR « STAND BY »", value: "CHECK" }
      }
    },
    "SHUT-DOWN": {
      id: "phase_shut_down",
      items: {
        PARKING_BRAKE: { id: "shut_down_parking_brake", title: "PARKING BRAKE", value: "SET" },
        INT_LIGHTS: { id: "shut_down_int_lights", title: "INT LIGHTS", value: "AS REQUIRED" },
        OXYGEN_MASTER_SWITCH: { id: "shut_down_oxygen_master_switch", title: "OXYGEN MASTER SWITCH", value: "OFF" },
        FUEL_SEL: { id: "shut_down_fuel_sel", title: "FUEL SEL", value: "MAN" },
        AP_TRIMS: { id: "shut_down_ap_trims", title: "AP / TRIMS", value: "OFF" },
        AC: { id: "shut_down_ac", title: "A/C", value: "OFF" },
        BLEED: { id: "shut_down_bleed", title: "BLEED", value: "OFF" },
        THROTTLE_IDLE: { id: "shut_down_throttle_idle", title: "THROTTLE", value: "IDLE for 2 MIN" },
        THROTTLE_LO_IDLE: { id: "shut_down_throttle_lo_idle", title: "THROTTLE", value: "LO-IDLE for 15 SEC" },
        INERT_SEP: { id: "shut_down_inert_sep", title: "INERT SEP", value: "CUT OFF" },
        CAS_MSG: { id: "shut_down_cas_msg", title: "CAS MSG « AUX BOOST PMP ON »", value: "CHECK" },
        AUX_BP: { id: "shut_down_aux_bp", title: "AUX BP", value: "OFF" },
        EXT_LIGHTS: { id: "shut_down_ext_lights", title: "EXT LIGHTS", value: "OFF" },
        GENERATOR: { id: "shut_down_generator", title: "GENERATOR", value: "OFF" },
        SOURCE: { id: "shut_down_source", title: "SOURCE (if INERT SEP retracted for 40 secs)", value: "OFF" },
        CRASH_LEVER: { id: "shut_down_crash_lever", title: "CRASH LEVER", value: "DOWN" }
      }
    }    
  }
};

// Exportando o checklist usando ES modules
export default checklist; 