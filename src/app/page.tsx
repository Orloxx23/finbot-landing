"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, PieChart, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-center w-full bg-white dark:bg-gray-800 shadow-md">
        <a className="flex items-center justify-center" href="#">
          <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
          <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            FinBot
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 hover:underline underline-offset-4"
            href="#features"
          >
            Características
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 hover:underline underline-offset-4"
            href="#cta"
          >
            Empezar
          </a>
        </nav>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
                  FinBot:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    Tu Asistente Financiero
                  </span>{" "}
                  en WhatsApp
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                  Lleva el control de tus gastos e ingresos de manera fácil y
                  rápida con FinBot, tu asistente financiero en WhatsApp.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  onClick={() => {
                    window.open("https://wa.me/573161167237", "_blank");
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Comenzar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800 dark:text-white">
              Características
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-green-50 dark:bg-gray-700 border-green-200 dark:border-green-600">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-300">
                    Control de Gastos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart className="h-12 w-12 mb-4 text-green-600 dark:text-green-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Registra y categoriza tus gastos fácilmente a través de
                    WhatsApp.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-gray-700 border-green-200 dark:border-green-600">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-300">
                    Seguimiento de Ingresos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <DollarSign className="h-12 w-12 mb-4 text-green-600 dark:text-green-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Mantén un registro detallado de tus ingresos y fuentes de
                    dinero.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 dark:bg-gray-700 border-green-200 dark:border-green-600">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-300">
                    Análisis Financiero
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TrendingUp className="h-12 w-12 mb-4 text-green-600 dark:text-green-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Obtén informes y análisis de tu situación financiera al
                    instante.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-green-600 dark:bg-green-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Comienza a Controlar tus Finanzas con FinBot Hoy
                </h2>
                <p className="mx-auto max-w-[600px] text-green-100 md:text-xl">
                  Únete a miles de usuarios que ya están mejorando su salud
                  financiera con FinBot, nuestro asistente de WhatsApp.
                </p>
              </div>
              <Button
                onClick={() => {
                  window.open("https://wa.me/573161167237", "_blank");
                }}
                className="bg-white text-green-600 hover:bg-green-100 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
              >
                Agregar Bot a WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 FinBot. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:underline underline-offset-4"
            href="/terms"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
