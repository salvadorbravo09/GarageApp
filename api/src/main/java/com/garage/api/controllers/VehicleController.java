package com.garage.api.controllers;

import com.garage.api.models.Vehicle;
import com.garage.api.services.VehicleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/vehicle/v1")
public class VehicleController {

    private VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicle(@PathVariable Long id) {
        Optional<Vehicle> existsVehicle = vehicleService.findById(id);
        if (existsVehicle.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(existsVehicle.orElseThrow());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        return ResponseEntity.status(HttpStatus.OK).body(vehicleService.save(vehicle));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicle) {
        Optional<Vehicle> existsVehicle = vehicleService.findById(id);

        if (existsVehicle.isPresent()) {
            Vehicle savedVehicle = existsVehicle.orElseThrow();
            savedVehicle.setBrand(vehicle.getBrand());
            savedVehicle.setModel(vehicle.getModel());
            savedVehicle.setYear(vehicle.getYear());
            savedVehicle.setColor(vehicle.getColor());
            savedVehicle.setTransmision(vehicle.getTransmision());
            return ResponseEntity.status(HttpStatus.OK).body(vehicleService.save(savedVehicle));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable Long id) {
        Optional<Vehicle> existsVehicle = vehicleService.findById(id);

        if (existsVehicle.isPresent()) {
            vehicleService.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
