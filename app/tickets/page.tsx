"use client";

import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import {
  Dashboard,
  DashboardHeaderSearch,
} from "@/app/dashboard/components/dashboard";
import TicketFormFilters, {
  FormFields,
} from "./components/forms/TicketFormFilters";

import TicketsTable from "./components/table/TicketsTable";
import Pagination from "@/app/dashboard/components/table/Pagination";

import { Ticket } from "./models/ticket";
import { TICKETS_QUERY, TicketList } from "./graphql/ticketsQuery";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useTicket } from "@/lib/ticket-provider";

type ListState = {
  tickets: Ticket[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type FormSeachField = {
  ticketName: string;
};

export default function Page() {
  const { push } = useRouter();
  const { ticketId } = useTicket();

  const [listState, setListState] = useState<ListState>({
    tickets: [
      {
        id: 1,
        ticketGrade: "6.3",
        ticketLocation: "Curitiba",
        ticketName: "Lorem ipsum dolor amet consectetur",
        ticketReviews: "2",
        ticketValue: "2351.28",
        ticketDiscountValue: "1391.28",
        ticketImg: "/image-1.svg",
      },
      {
        id: 2,
        ticketGrade: "6.3",
        ticketLocation: "Curitiba",
        ticketName: "Lorem ipsum dolor amet consectetur",
        ticketReviews: "2",
        ticketValue: "2351.28",
        ticketDiscountValue: "1391.28",
        ticketImg: "/image-2.svg",
      },
      {
        id: 3,
        ticketGrade: "6.3",
        ticketLocation: "Curitiba",
        ticketName: "Lorem ipsum dolor amet consectetur",
        ticketReviews: "2",
        ticketValue: "2351.28",
        ticketDiscountValue: "1391.28",
        ticketImg: "/image-3.svg",
      },
      {
        id: 4,
        ticketGrade: "6.3",
        ticketLocation: "Curitiba",
        ticketName: "Lorem ipsum dolor amet consectetur",
        ticketReviews: "2",
        ticketValue: "2351.28",
        ticketDiscountValue: "1391.28",
        ticketImg: "/image-4.svg",
      },
      {
        id: 5,
        ticketGrade: "6.3",
        ticketLocation: "Curitiba",
        ticketName: "Lorem ipsum dolor amet consectetur",
        ticketReviews: "2",
        ticketValue: "2351.28",
        ticketDiscountValue: "1391.28",
        ticketImg: "/image-5.svg",
      },
    ],
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const formFilters = useForm<FormFields>();
  const formSearch = useForm<FormSeachField>();

  const [ticketsQuery, { data, loading, error, refetch }] =
    useLazyQuery<TicketList>(TICKETS_QUERY, {
      variables: {
        pageSize: 7,
      },
    });

  useEffect(() => {
    refetch && refetch();
  }, [refetch]);

  const handleClickNext = () => {
    refetch &&
      refetch({
        after: data?.tickets.afterCursor,
        before: null,
      });
  };

  const handleClickBefore = () => {
    refetch &&
      refetch({
        after: null,
        before: data?.tickets.beforeCursor,
      });
  };

  useEffect(() => {
    if (error) {
      // addToast();
    }
  }, [error]);

  useEffect(() => {
    ticketsQuery();
  }, [ticketsQuery]);

  useEffect(() => {
    if (loading) {
      // showLoading();
      return;
    }

    if (data) {
      setListState({
        tickets: data.tickets.entries,
        hasNextPage: !!data.tickets.afterCursor,
        hasPreviousPage: !!data.tickets.beforeCursor,
      });
    }

    // closeLoading();
  }, [data, loading]);

  const onClickEditButton = (id: number, ticketName: string) => {
    ticketId(id);

    push(`/tickets/${ticketName.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const onSubmit: SubmitHandler<FormSeachField> = (input: {
    [key: string]: any;
  }) => {
    refetch({
      filters: Object.fromEntries(
        Object.entries(input).filter(([, value]) => !!value)
      ),
    });
  };

  return (
    <Dashboard
      dashboardMainHeaderTitle={
        <Form {...formSearch}>
          <form onSubmit={formSearch.handleSubmit(onSubmit)}>
            <DashboardHeaderSearch
              onSearchChange={() => {}}
              register={formSearch.register}
            />
          </form>
        </Form>
      }
    >
      <div className="grid grid-cols-12 grid-flow-row-dense gap-6">
        <div className="col-span-3 p-6 mt-[10px] bg-primary h-[1030]">
          <Form {...formFilters}>
            <form onSubmit={() => {}}>
              <TicketFormFilters
                control={formFilters.control}
                register={formFilters.register}
              />
            </form>
          </Form>
        </div>

        <div className="rounded-lg col-span-9">
          {listState.tickets && (
            <>
              <TicketsTable
                tickets={listState.tickets}
                onClickEditButton={onClickEditButton}
              />
              <Pagination
                onNextClick={handleClickNext}
                onPreviousClick={handleClickBefore}
                disableNext={!listState.hasNextPage}
                disableBefore={!listState.hasPreviousPage}
              />
            </>
          )}
        </div>
      </div>
      {/* <LoadingOverlay /> */}
    </Dashboard>
  );
}
