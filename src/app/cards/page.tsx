"use client";

import Header from "../(components)/Header/Header";
import { IconCirclePlusFilled } from "@tabler/icons-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "../(components)/Modal/Modal";
import Input from "../(components)/Form/Input";
import CardCredit from "../(components)/Cards/CardCredit";
// import MaskedInput from "../(components)/Form/MaskedInput";
import Select from "../(components)/Form/Select";
import { optionsDays } from "../lib/formData";
import { Card } from "../lib/definitions";

export default function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "http://192.168.18.7:8000/api/cards?user_id=9de5673c-de43-46f4-ac26-35ccb8059704",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar os cartões");
      }
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      console.error("Erro ao buscar cartões:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const [formInfo, setFormInfo] = useState({
    user_id: "9de5673c-de43-46f4-ac26-35ccb8059704",
    surname: "",
    closing: "",
    finished: "",
    limit: "",
    color: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.18.7:8000/api/card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const data = await response.json();
      // Fecha o modal
      closeModal();

      // Busca os cards novamente
      fetchCards();

      // Limpar os campos após o envio
      setFormInfo({
        user_id: "9de5673c-de43-46f4-ac26-35ccb8059704",
        surname: "",
        closing: "",
        finished: "",
        limit: "",
        color: "",
      });

      console.log("Sucesso:", data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header title="Cartões">
        <button
          className="bg-purple-500 hover:bg-purple-600 p-2 flex gap-2 rounded-lg text-sm items-center justify-center transition-all"
          onClick={openModal}
        >
          Novo Cartão
          <IconCirclePlusFilled className="w-5 h-5" />
        </button>

        <Modal title="Novo Cartão" isOpen={isModalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <Input
                type="text"
                name="surname"
                id="surname"
                label="Apelido"
                placeholder="Apelido do Cartão"
                onChange={handleChange}
              />

              <Select
                size="sm:col-span-2 sm:col-start-1"
                id="closing"
                name="closing"
                label="Data(dia de fechamento)"
                options={optionsDays}
                onChange={handleChange}
              />

              <Select
                size="sm:col-span-2"
                id="finished"
                name="finished"
                label="Data(dia de vencimento)"
                options={optionsDays}
                onChange={handleChange}
              />

              {/* <MaskedInput
                type="text"
                name="phone"
                id="phone"
                title="Phone Number"
                placeholder="Limite do Cartão"
                mask="(999) 999-9999"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
              /> */}

              <Input
                type="text"
                name="limit"
                id="limit"
                label="Limite do Cartão"
                placeholder="Limite do Cartão"
                size="sm:col-span-2"
                onChange={handleChange}
              />

              <Input
                type="text"
                name="color"
                id="color"
                label="Cor"
                placeholder="Cor"
                size="sm:col-span-2"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </form>
        </Modal>
      </Header>

      <div className="grid grid-cols-1 gap-x-6 gap-y-6 mt-4 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <p className="text-gray-800">Carregando...</p>
        ) : cards.length > 0 ? (
          cards.map((card) => (
            <CardCredit
              key={card.id}
              title={card.surname}
              color={card.color}
              limit={parseFloat(card.limit).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              id={card.id.toString()}
            />
          ))
        ) : (
          <p className="text-gray-800">Nenhum cartão encontrado!</p>
        )}
      </div>
    </>
  );
}
