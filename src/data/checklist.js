const checklist = {
  FLIGHT_PHASES: {
    "PRELIMINARY_COCKPIT_PREPARATION": {
      id: "phase_preliminary_cockpit_preparation",
      items: {
        AIRCRAFT_DOCUMENTS: { id: "prelim_aircraft_documents", title: "Aircraft Documents", value: "CHECKED" },
        SEATS_BELTS_PEDALS: { id: "prelim_seats_belts_pedals", title: "Seats, Belts & Pedals", value: "ADJUSTED" },
        PARKING_BRAKES: { id: "prelim_parking_brakes", title: "Parking Brakes", value: "SET" },
        LANDING_GEAR_LEVER: { id: "prelim_landing_gear_lever", title: "Landing Gear Lever", value: "DOWN" },
        BATTERY_SWITCH: { id: "prelim_battery_switch", title: "Battery Switch", value: "OFF" },
        EXTERNAL_POWER: { id: "prelim_external_power", title: "External Power", value: "IF AVAILABLE" },
        FLAPS: { id: "prelim_flaps", title: "Flaps", value: "UP" },
        THRUST_LEVERS: { id: "prelim_thrust_levers", title: "Thrust Levers", value: "IDLE" },
        PROPELLER_LEVERS: { id: "prelim_propeller_levers", title: "Propeller Levers", value: "MAX RPM" },
        FUEL_LEVERS: { id: "prelim_fuel_levers", title: "Fuel Levers", value: "CUTOFF" }
      }
    },
    "COCKPIT_PREPARATION": {
      id: "phase_cockpit_preparation",
      items: {
        BATTERY_SWITCH: { id: "cockpit_battery_switch", title: "Battery Switch", value: "EXT PWR" },
        NAV_COM_RADIOS: { id: "cockpit_nav_com_radios", title: "NAV & COM Radios", value: "ON" },
        TRANSPONDER: { id: "cockpit_transponder", title: "Transponder", value: "STANDBY" },
        FUEL_QUANTITY: { id: "cockpit_fuel_quantity", title: "Fuel Quantity", value: "CHECKED" },
        FUEL_PUMPS: { id: "cockpit_fuel_pumps", title: "Fuel Pumps", value: "OFF" },
        FUEL_CROSSFEED: { id: "cockpit_fuel_crossfeed", title: "Fuel Crossfeed", value: "OFF" },
        AUTOPILOT: { id: "cockpit_autopilot", title: "Autopilot", value: "OFF" },
        VOLTIMETERS: { id: "cockpit_voltimeters", title: "Voltmeters", value: "CHECKED" },
        PITOT_HEAT: { id: "cockpit_pitot_heat", title: "Pitot Heat", value: "OFF" },
        PASSENGER_SIGNS: { id: "cockpit_passenger_signs", title: "Passenger Signs (No Smoking & Fasten Seatbelts)", value: "ON" },
        NAVIGATION_LIGHTS: { id: "cockpit_navigation_lights", title: "Navigation Lights", value: "ON" },
        ANTI_COLLISION_LIGHTS: { id: "cockpit_anti_collision_lights", title: "Anti-Collision (Beacon & Strobe) Lights", value: "BOTH ON" },
        INVERTERS: { id: "cockpit_inverters", title: "Inverters 1 & 2", value: "BOTH ON" },
        INERTIAL_SEPARATION: { id: "cockpit_inertial_separation", title: "Inertial Separation 1 & 2", value: "BOTH OFF" },
        FIRE_TEST: { id: "cockpit_fire_test", title: "Fire Test", value: "PERFORMED" },
        ANNUNCIATORS_TEST: { id: "cockpit_annunciators_test", title: "Annunciators Test", value: "PERFORMED" }
      }
    },
    "BEFORE_START": {
      id: "phase_before_start",
      items: {
        FLAPS: { id: "before_start_flaps", title: "Flaps", value: "SET FOR TAKEOFF (0% to 25%)" },
        FLIGHT_INSTRUMENTS: { id: "before_start_flight_instruments", title: "Flight Instruments", value: "CHECKED" },
        ALTIMETERS: { id: "before_start_altimeters", title: "Altimeters", value: "QNH ADJUSTED" },
        ATC_CLEARANCE: { id: "before_start_atc_clearance", title: "ATC Clearance", value: "GATHERED" },
        FUEL_PUMPS: { id: "before_start_fuel_pumps", title: "Fuel Pumps", value: "ON" },
        GROUND_EQUIPMENT: { id: "before_start_ground_equipment", title: "Ground Equipment", value: "FULLY REMOVED" },
        DOORS: { id: "before_start_doors", title: "Doors", value: "CLOSED" }
      }
    },
    "ENGINE_START": {
      id: "phase_engine_start",
      items: {
        INERTIAL_SEPARATION: { id: "engine_start_inertial_separation", title: "Inertial Separation 1 & 2", value: "BOTH ON" },
        LEFT_ENGINE_FUEL_PUMPS: { id: "engine_start_left_engine_fuel_pumps", title: "Left Engine Fuel Pumps", value: "ON" },
        LEFT_ENGINE_STARTER_SWITCH: { id: "engine_start_left_engine_starter_switch", title: "Left Engine Starter Switch", value: "ON" },
        LEFT_FUEL_LEVER: { id: "engine_start_left_fuel_lever", title: "Left Fuel Lever", value: "FULLY RICH AFTER 10% NH" },
        LEFT_ENGINE_STARTER_SWITCH_OFF: { id: "engine_start_left_engine_starter_switch_off", title: "Left Engine Starter Switch", value: "OFF AFTER ENGINE IS STABLE" },
        RIGHT_ENGINE_FUEL_PUMPS: { id: "engine_start_right_engine_fuel_pumps", title: "Right Engine Fuel Pumps", value: "ON" },
        RIGHT_ENGINE_STARTER_SWITCH: { id: "engine_start_right_engine_starter_switch", title: "Right Engine Starter Switch", value: "ON" },
        RIGHT_FUEL_LEVER: { id: "engine_start_right_fuel_lever", title: "Right Fuel Lever", value: "FULLY RICH AFTER 10% NH" },
        RIGHT_ENGINE_STARTER_SWITCH_OFF: { id: "engine_start_right_engine_starter_switch_off", title: "Right Engine Starter Switch", value: "OFF AFTER ENGINE IS STABLE" }
      }
    },
    "AFTER_START": {
      id: "phase_after_start",
      items: {
        BATTERY_SWITCH: { id: "after_start_battery_switch", title: "Battery Switch", value: "BAT" },
        EXTERNAL_POWER: { id: "after_start_external_power", title: "External Power", value: "IF AVAILABLE, DISCONNECT" },
        GENERATORS: { id: "after_start_generators", title: "Generators 1 & 2", value: "BOTH ON" },
        INVERTERS: { id: "after_start_inverters", title: "Inverters 1 & 2", value: "BOTH ON" },
        VOLTIMETERS: { id: "after_start_voltimeters", title: "Voltmeters", value: "CHECKED" },
        INERTIAL_SEPARATION: { id: "after_start_inertial_separation", title: "Inertial Separation 1 & 2", value: "BOTH ON" },
        NAV_COM_RADIOS: { id: "after_start_nav_com_radios", title: "NAV & COM Radios", value: "ON" },
        TRANSPONDER: { id: "after_start_transponder", title: "Transponder", value: "STANDBY" }
      }
    },
    "TAXI": {
      id: "phase_taxi",
      items: {
        TAXI_LIGHTS: { id: "taxi_taxi_lights", title: "Taxi Lights", value: "ON" },
        FUEL_PUMPS: { id: "taxi_fuel_pumps", title: "Fuel Pumps", value: "ON" },
        FUEL_CROSSFEED: { id: "taxi_fuel_crossfeed", title: "Fuel Crossfeed", value: "AS REQUIRED" },
        DEPARTURE_HEADING: { id: "taxi_departure_heading", title: "Departure Heading", value: "SET" },
        RADIOS: { id: "taxi_radios", title: "Radios", value: "ON" },
        DEPARTURE_BRIEFING: { id: "taxi_departure_briefing", title: "Departure Briefing", value: "REVIEWED" },
        ATC_CLEARANCE: { id: "taxi_atc_clearance", title: "ATC Clearance", value: "GATHERED" },
        PARKING_BRAKES: { id: "taxi_parking_brakes", title: "Parking Brakes", value: "RELEASED" }
      }
    },
    "BEFORE_TAKEOFF": {
      id: "phase_before_takeoff",
      items: {
        PARKING_BRAKES: { id: "before_takeoff_parking_brakes", title: "Parking Brakes", value: "SET" },
        THRUST_LEVERS: { id: "before_takeoff_thrust_levers", title: "Thrust Levers", value: "IDLE" },
        PROPELLER_LEVERS: { id: "before_takeoff_propeller_levers", title: "Propeller Levers", value: "MAX RPM" },
        FUEL_LEVERS: { id: "before_takeoff_fuel_levers", title: "Fuel Levers", value: "FULL RICH" },
        TRANSPONDER: { id: "before_takeoff_transponder", title: "Transponder", value: "ON" },
        AIR_CONDITIONING: { id: "before_takeoff_air_conditioning", title: "Air Conditioning", value: "AS REQUIRED" },
        FLIGHT_INSTRUMENTS: { id: "before_takeoff_flight_instruments", title: "Flight Instruments", value: "CHECKED" },
        ANNUNCIATORS_TEST: { id: "before_takeoff_annunciators_test", title: "Annunciators Test", value: "PERFORMED" },
        FLAPS: { id: "before_takeoff_flaps", title: "Flaps", value: "SET FOR TAKEOFF (0% to 25%)" },
        AILERON_RUDDER_TRIMS: { id: "before_takeoff_aileron_rudder_trims", title: "Aileron & Rudder Trims", value: "CHECK 0%" },
        PITCH_TRIM: { id: "before_takeoff_pitch_trim", title: "Pitch Trim", value: "SET FOR TAKEOFF" },
        FLIGHT_CONTROLS: { id: "before_takeoff_flight_controls", title: "Flight Controls", value: "CHECKED" },
        YAW_DAMPER: { id: "before_takeoff_yaw_damper", title: "Yaw Damper", value: "ON" },
        FLIGHT_DIRECTOR: { id: "before_takeoff_flight_director", title: "Flight Director", value: "ON" },
        PITOT_STATIC_HEAT: { id: "before_takeoff_pitot_static_heat", title: "Pitot/Static Heat", value: "ON" },
        AUTO_FEATHER: { id: "before_takeoff_auto_feather", title: "Auto Feather", value: "ARMED" },
        INERTIAL_SEPARATION: { id: "before_takeoff_inertial_separation", title: "Inertial Separation 1 & 2", value: "BOTH ON" },
        EXTERIOR_LIGHTS: { id: "before_takeoff_exterior_lights", title: "Exterior Lights", value: "CHECKED" }
      }
    },
    "AFTER_TAKEOFF_CLIMB": {
      id: "phase_after_takeoff_climb",
      items: {
        LANDING_GEAR: { id: "after_takeoff_climb_landing_gear", title: "Landing Gear", value: "LEVER UP/LIGHTS OUT" },
        FLAPS: { id: "after_takeoff_climb_flaps", title: "Flaps", value: "UP" },
        THRUST_LEVERS: { id: "after_takeoff_climb_thrust_levers", title: "Thrust Levers", value: "90%" },
        PROPELLER_LEVERS: { id: "after_takeoff_climb_propeller_levers", title: "Propeller Levers", value: "90%" },
        AUTO_FEATHER: { id: "after_takeoff_climb_auto_feather", title: "Auto Feather", value: "OFF" },
        PROPELLER_SYNC: { id: "after_takeoff_climb_propeller_sync", title: "Propeller Sync", value: "ON" },
        TAXI_LIGHTS: { id: "after_takeoff_climb_taxi_lights", title: "Taxi Lights", value: "OFF" },
        ENGINE_INSTRUMENTS: { id: "after_takeoff_climb_engine_instruments", title: "Engine Instruments", value: "CHECKED" },
        AUTOPILOT: { id: "after_takeoff_climb_autopilot", title: "Autopilot", value: "ON ABOVE 3000FT" },
        LANDING_LIGHTS: { id: "after_takeoff_climb_landing_lights", title: "Landing Lights", value: "OFF ABOVE 10000FT" }
      }
    },
    "CRUISE": {
      id: "phase_cruise",
      items: {
        PROPELLER_SYNC: { id: "cruise_propeller_sync", title: "Propeller Sync", value: "ON" },
        PROPELLER_LEVERS: { id: "cruise_propeller_levers", title: "Propeller Levers", value: "50% TO 60%" },
        THRUST_LEVERS: { id: "cruise_thrust_levers", title: "Thrust Levers", value: "60%" },
        SEATBELT_SIGN: { id: "cruise_seatbelt_sign", title: "Seatbelt Sign", value: "AS REQUIRED" },
        LANDING_LIGHTS: { id: "cruise_landing_lights", title: "Landing Lights", value: "OFF ABOVE 10000FT" },
        ALTIMETERS: { id: "cruise_altimeters", title: "Altimeters", value: "QNH ADJUSTED" }
      }
    },
    "DESCENT": {
      id: "phase_descent",
      items: {
        SEATBELT_SIGNS: { id: "descent_seatbelt_signs", title: "No Smoking & Fasten Seatbelts Signs", value: "BOTH ON" },
        ARRIVAL_BRIEFING: { id: "descent_arrival_briefing", title: "Arrival Briefing", value: "REVIEWED" },
        LANDING_LIGHTS: { id: "descent_landing_lights", title: "Landing Lights", value: "ON BELOW 10000FT" },
        AUTOPILOT: { id: "descent_autopilot", title: "Autopilot", value: "OFF BELOW 3000FT" },
        ALTIMETERS: { id: "descent_altimeters", title: "Altimeters", value: "QNH ADJUSTED" }
      }
    },
    "APPROACH": {
      id: "phase_approach",
      items: {
        ALTIMETERS: { id: "approach_altimeters", title: "Altimeters", value: "QNH ADJUSTED" },
        AUTO_FEATHER: { id: "approach_auto_feather", title: "Auto Feather", value: "ARMED" },
        PROPELLER_SYNC: { id: "approach_propeller_sync", title: "Propeller Sync", value: "OFF" },
        PROPELLER_LEVERS: { id: "approach_propeller_levers", title: "Propeller Levers", value: "MAX RPM" },
        FLAPS: { id: "approach_flaps", title: "Flaps", value: "SET FOR APPROACH (40% to 50%)" },
        LANDING_GEAR: { id: "approach_landing_gear", title: "Landing Gear", value: "DOWN/THREE GREEN" },
        EXTERIOR_LIGHTS: { id: "approach_exterior_lights", title: "Exterior Lights", value: "CHECKED" }
      }
    },
    "LANDING_ON_FINAL": {
      id: "phase_landing_on_final",
      items: {
        LANDING_GEAR: { id: "landing_on_final_landing_gear", title: "Landing Gear", value: "DOWN/THREE GREEN" },
        FLAPS: { id: "landing_on_final_flaps", title: "Flaps", value: "SET FOR LANDING (75% to 100%)" },
        INERTIAL_SEPARATION: { id: "landing_on_final_inertial_separation", title: "Inertial Separation 1 & 2", value: "AS REQUIRED" },
        EXTERIOR_LIGHTS: { id: "landing_on_final_exterior_lights", title: "Exterior Lights", value: "CHECKED" },
        AUTOPILOT: { id: "landing_on_final_autopilot", title: "Autopilot", value: "OFF" }
      }
    },
    "ALL_ENGINES_GO_AROUND": {
      id: "phase_all_engines_go_around",
      items: {
        TO_GA_BUTTON: { id: "go_around_to_ga_button", title: "TO/GA Button", value: "Push" },
        THRUST_LEVERS: { id: "go_around_thrust_levers", title: "Thrust Levers", value: "FULL FORWARD" },
        PITCH_ATTITUDE: { id: "go_around_pitch_attitude", title: "Pitch Attitude", value: "8° INITIALLY, THEN AS REQUIRED" },
        FLAPS_25: { id: "go_around_flaps_25", title: "Flaps", value: "25%" },
        LANDING_GEAR: { id: "go_around_landing_gear", title: "Landing Gear (positive climb)", value: "UP/LIGHTS OUT" },
        FLAPS_AS_REQUIRED: { id: "go_around_flaps_as_required", title: "Flaps", value: "AS REQUIRED" },
        YAW_DAMPER: { id: "go_around_yaw_damper", title: "Yaw Damper", value: "ON" },
        AUTOPILOT: { id: "go_around_autopilot", title: "Autopilot", value: "AS DESIRED" }
      }
    },
    "AFTER_LANDING": {
      id: "phase_after_landing",
      items: {
        PROPELLER_LEVERS: { id: "after_landing_propeller_levers", title: "Propeller Levers", value: "MAX RPM" },
        FUEL_LEVERS: { id: "after_landing_fuel_levers", title: "Fuel Levers", value: "LOW (50%)" },
        LANDING_LIGHTS: { id: "after_landing_landing_lights", title: "Landing Lights", value: "OFF" },
        INERTIAL_SEPARATION: { id: "after_landing_inertial_separation", title: "Inertial Separation 1 & 2", value: "AS REQUIRED" },
        PITOT_STATIC_HEAT: { id: "after_landing_pitot_static_heat", title: "Pitot/Static Heat", value: "OFF" },
        AUTO_FEATHER: { id: "after_landing_auto_feather", title: "Auto Feather", value: "OFF" },
        FLAPS: { id: "after_landing_flaps", title: "Flaps", value: "0%" },
        AILERON_RUDDER_TRIMS: { id: "after_landing_aileron_rudder_trims", title: "Aileron & Rudder Trims", value: "CHECK 0%" }
      }
    },
    "SHUTDOWN": {
      id: "phase_shutdown",
      items: {
        PARKING_BRAKES: { id: "shutdown_parking_brakes", title: "Parking Brakes", value: "SET/WHEELS CHOCKED" },
        TAXI_LIGHTS: { id: "shutdown_taxi_lights", title: "Taxi Lights", value: "OFF" },
        THRUST_LEVERS: { id: "shutdown_thrust_levers", title: "Thrust Levers", value: "IDLE" },
        PROPELLER_LEVERS: { id: "shutdown_propeller_levers", title: "Propeller Levers", value: "MIN RPM" },
        FUEL_LEVERS: { id: "shutdown_fuel_levers", title: "Fuel Levers", value: "CUTOFF" },
        INVERTERS: { id: "shutdown_inverters", title: "Inverters 1 & 2", value: "BOTH OFF" },
        GENERATORS: { id: "shutdown_generators", title: "Generators 1 & 2", value: "BOTH OFF" },
        FUEL_CROSSFEED: { id: "shutdown_fuel_crossfeed", title: "Fuel Crossfeed", value: "OFF" },
        FUEL_PUMPS: { id: "shutdown_fuel_pumps", title: "Fuel Pumps", value: "OFF" }
      }
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist; 