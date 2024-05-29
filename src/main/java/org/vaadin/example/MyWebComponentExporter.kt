package org.vaadin.example

import com.vaadin.flow.component.WebComponentExporter
import com.vaadin.flow.component.webcomponent.WebComponent

class MyWebComponentExporter : WebComponentExporter<MainView>("my-web-component") {
    override fun configureInstance(webComponent: WebComponent<MainView>?, component: MainView?) {

    }
}