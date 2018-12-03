package data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import data.services.dataService;

@CrossOrigin("*")
@RestController()
@RequestMapping(value = "/Bolsa")
public class dataController {


    @Autowired
    dataService dataService;

    @GetMapping("/{function}/{symbol}")
    public StringBuffer getBolsaInfo(@PathVariable("function") String function, @PathVariable("symbol") String symbol){
        System.out.println(function);
        System.out.println(symbol);
        return dataService.bolsa(symbol,function);
    }
}