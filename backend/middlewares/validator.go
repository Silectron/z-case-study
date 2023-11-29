package middlewares

import (
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type Validator struct {
	validator *validator.Validate
}

func Validation(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		c.Echo().Validator = &Validator{validator: validator.New()}
		return next(c)
	}
}

func (v *Validator) Validate(i interface{}) error {
	if err := v.validator.Struct(i); err != nil {
		acc := err.(validator.ValidationErrors)

		return echo.NewHTTPError(http.StatusBadRequest, acc)
	}

	return nil
}
