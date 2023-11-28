package main

import (
	"zbackend/controllers/v1"
	"zbackend/middlewares"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Pre(middleware.RemoveTrailingSlash())
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middlewares.Cors)

	apiGroup := e.Group("/api/v1")
	controllers.ApiV1Controller(apiGroup)

	e.Logger.Fatal(e.Start(":1323"))
}
