describe("Build Factory object and check money addition process", () => {
    //before every test go to / path which is path declared in cypress.json - "baseUrl"
    beforeEach(() => {
        cy.visit("/");
    });

    it("build factory and check money", () => {
        //get map element by className and use that later in code like 'map-square'
        cy.get(".map-square__0-1").as("map-square");

        //click event on that element
        cy.get("@map-square").click();

        //click submit button on first element in list to build object on map
        cy.get(
            ".options__container .options__element:first-child .options__element--submit"
        ).click();

        //get element which add yellow background
        cy.get(".map-square__0-1 .map-element__during-build--container").as(
            "square-during-build-process"
        );

        //check if element with yellow background was added
        cy.get("@square-during-build-process").should("have.length", 1);

        //after build factory object we should get that ready after 5 days of building
        //instead of using className we can add data-cy parameter
        for (let i = 0; i < 5; i++) {
            cy.get("[data-cy=finish-day__btn]").click();
        }

        //check that yellow background className element disappear - element was build sucessfully
        cy.get("@square-during-build-process").should("have.length", 0);

        //get element which display money, go to the next day and check if money was increment by 20000 units
        let moneyAfterBuild = 0;
        cy.get("[data-cy=money-value]").then(moneySpanElement => {
            moneyAfterBuild += parseInt(moneySpanElement.text()) + 20000;

            cy.get("[data-cy=finish-day__btn]").click();

            cy.get("[data-cy=money-value]").should(
                "have.text",
                moneyAfterBuild.toString()
            );
        });
    });
});
