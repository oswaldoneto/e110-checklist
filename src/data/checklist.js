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
        FLAPS: { id: "before_start_flaps", title: "Flaps", value: "SET FOR TAKEOFF" },
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
    }
  }
};

// Exportando o checklist usando ES modules
export default checklist; 