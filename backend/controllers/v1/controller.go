package controllers

import (
	"zbackend/controllers/v1/routes"

	"github.com/labstack/echo/v4"
)

func ApiV1Controller(g *echo.Group) {
	g.GET("", routes.Root)
}
