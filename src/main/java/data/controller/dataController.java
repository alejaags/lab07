package data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import data.services.dataService;

@CrossOrigin("*")
@RestController()
@RequestMapping(value = "/Movie")
public class dataController {


    @Autowired
    dataService dataService;

    /**
     * search the dataMovie by title and year
     * @param title name of the movie
     * @param year year
     * @return 
     */
    @GetMapping("/{title}/{year}")
    public StringBuffer getMovieInfo(@PathVariable("title") String title, @PathVariable("year") String year){
        System.out.println(title);
        System.out.println(year);
        return dataService.movie(title,year);
    }
}