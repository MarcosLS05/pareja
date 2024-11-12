package net.ausiasmarch.contante.service;

import java.math.BigDecimal;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import net.ausiasmarch.contante.entity.ApunteEntity;
import net.ausiasmarch.contante.exception.ResourceNotFoundException;
import net.ausiasmarch.contante.repository.ApunteRepository;

@Service
public class ApunteService implements ServiceInterface<ApunteEntity> {

    @Autowired
    private ApunteRepository oApunteRepository;

    @Autowired
    private RandomService oRandomService;

    private BigDecimal[] arrdebe = {
            new BigDecimal("200.0000"), new BigDecimal("0.0000"), new BigDecimal("50.0000"), new BigDecimal("0.0000"),
            new BigDecimal("120.0000"), new BigDecimal("0.0000"), new BigDecimal("300.0000"), new BigDecimal("0.0000"),
            new BigDecimal("150.0000"), new BigDecimal("0.0000"), new BigDecimal("75.0000"), new BigDecimal("0.0000"),
            new BigDecimal("200.0000"), new BigDecimal("0.0000"), new BigDecimal("90.0000"), new BigDecimal("0.0000"),
            new BigDecimal("175.0000"), new BigDecimal("0.0000"), new BigDecimal("80.0000"), new BigDecimal("0.0000")
    };

    // Datos de la columna haber como BigDecimal
    private BigDecimal[] arrhaber = {
            new BigDecimal("0.0000"), new BigDecimal("150.0000"), new BigDecimal("0.0000"), new BigDecimal("75.0000"),
            new BigDecimal("0.0000"), new BigDecimal("200.0000"), new BigDecimal("0.0000"), new BigDecimal("100.0000"),
            new BigDecimal("0.0000"), new BigDecimal("250.0000"), new BigDecimal("0.0000"), new BigDecimal("175.0000"),
            new BigDecimal("0.0000"), new BigDecimal("100.0000"), new BigDecimal("0.0000"), new BigDecimal("220.0000"),
            new BigDecimal("0.0000"), new BigDecimal("135.0000"), new BigDecimal("0.0000"), new BigDecimal("160.0000")
    };

    // Datos de la columna descripcion
    private String[] arrdescripcion = {
            "Compra de materiales", "Venta de producto", "Gasto de oficina", "Servicio prestado", "Compra de activos",
            "Ingreso por consultoría", "Compra de licencias", "Reembolso de gastos", "Publicidad en redes",
            "Venta de servicios",
            "Mantenimiento de equipo", "Cobro por formación", "Adquisición de suministros", "Ingresos de eventos",
            "Gastos de viaje", "Facturación de servicios", "Alquiler de oficina", "Ingreso por publicidad",
            "Servicios externos",
            "Venta de activos"
    };

    // Datos de la columna comentarios
    private String[] arrcomentarios = {
            "Pago con transferencia", "Ingreso en efectivo", "Compra de papelería", "Cobro a cliente",
            "Equipo de computo",
            "Proyecto ABC", "Software anual", "Viaje de negocios", "Campaña en redes", "Contrato mensual",
            "Reparación de PC", "Curso de verano", "Compra de tinta", "Charla en empresa", "Hotel y transporte",
            "Soporte técnico", "Pago mensual", "Banner web", "Asesoría fiscal", "Mobiliario antiguo"
    };

    // Datos de la columna momentstamp
    private String[] arrmomentstamp = {
            "2024-11-06 10:15:00", "2024-11-06 10:30:00", "2024-11-06 10:45:00", "2024-11-06 11:00:00",
            "2024-11-06 11:15:00",
            "2024-11-06 11:30:00", "2024-11-06 11:45:00", "2024-11-06 12:00:00", "2024-11-06 12:15:00",
            "2024-11-06 12:30:00",
            "2024-11-06 12:45:00", "2024-11-06 13:00:00", "2024-11-06 13:15:00", "2024-11-06 13:30:00",
            "2024-11-06 13:45:00",
            "2024-11-06 14:00:00", "2024-11-06 14:15:00", "2024-11-06 14:30:00", "2024-11-06 14:45:00",
            "2024-11-06 15:00:00"
    };

    // Datos de la columna orden
    private int[] arrorden = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 };

    // Datos de la columna id_asiento
    private long[] arrid_asiento = { 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014,
            1015, 1016, 1017, 1018, 1019, 1020 };

    // Datos de la columna id_subcuenta
    private long[] arrid_subcuenta = { 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2015, 2016, 2017, 2018, 2019, 2020 };

    // Datos de la columna id_tipoapunte
    private long[] arrid_tipoapunte = { 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013,
            3014, 3015, 3016, 3017, 3018, 3019, 3020 };


    public Long randomCreate(Long cantidad) {
        for (int i = 0; i < cantidad; i++) {
            ApunteEntity oApunteEntity = new ApunteEntity();
            oApunteEntity.setDebe(arrdebe[oRandomService.getRandomInt(0, arrdebe.length - 1)]);
            oApunteEntity.setHaber(arrhaber[oRandomService.getRandomInt(0, arrhaber.length - 1)]);
            oApunteEntity.setDescripcion(arrdescripcion[oRandomService.getRandomInt(0, arrdescripcion.length - 1)]);
            oApunteEntity.setComentarios(arrcomentarios[oRandomService.getRandomInt(0, arrcomentarios.length - 1)]);
            oApunteEntity.setMomentstamp(arrmomentstamp[oRandomService.getRandomInt(0, arrmomentstamp.length - 1)]);
            oApunteEntity.setOrden(arrorden[oRandomService.getRandomInt(0, arrorden.length - 1)]);
            oApunteEntity.setId_asiento(arrid_asiento[oRandomService.getRandomInt(0, arrid_asiento.length - 1)]);
            oApunteEntity.setId_subcuenta(arrid_subcuenta[oRandomService.getRandomInt(0, arrid_subcuenta.length - 1)]);
            oApunteEntity
                    .setId_tipoapunte(arrid_tipoapunte[oRandomService.getRandomInt(0, arrid_tipoapunte.length - 1)]);
            oApunteRepository.save(oApunteEntity);
        }
        return oApunteRepository.count();
    }

    public Page<ApunteEntity> getPage(Pageable oPageable, Optional<String> filter) {
        if (filter.isPresent()) {
            return oApunteRepository
                    .findByDescripcionContainingOrComentariosContaining(
                            filter.get(), filter.get(), oPageable);
        } else {
            return oApunteRepository.findAll(oPageable);
        }
    }

    public ApunteEntity get(Long id) {
        return oApunteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Apunte no encontrado"));
    }

    public Long count() {
        return oApunteRepository.count();
    }

    public Long delete(Long id) {
        oApunteRepository.deleteById(id);
        return 1L;
    }

    public ApunteEntity create(ApunteEntity oApunteEntity) {
        return oApunteRepository.save(oApunteEntity);
    }

    public ApunteEntity update(ApunteEntity oApunteEntity) {
        ApunteEntity oApunteEntityFromDatabase = oApunteRepository.findById(oApunteEntity.getId()).get();
        if (oApunteEntity.getDebe() != null) {
            oApunteEntityFromDatabase.setDebe(oApunteEntity.getDebe());
        }
        if (oApunteEntity.getHaber() != null) {
            oApunteEntityFromDatabase.setHaber(oApunteEntity.getHaber());
        }
        if (oApunteEntity.getDescripcion() != null) {
            oApunteEntityFromDatabase.setDescripcion(oApunteEntity.getDescripcion());
        }
        if (oApunteEntity.getComentarios() != null) {
            oApunteEntityFromDatabase.setComentarios(oApunteEntity.getComentarios());
        }
        if (oApunteEntity.getMomentstamp() != null) {
            oApunteEntityFromDatabase.setMomentstamp(oApunteEntity.getMomentstamp());
        }
        if (oApunteEntity.getOrden() != 0) {
            oApunteEntityFromDatabase.setOrden(oApunteEntity.getOrden());
        }
        if (oApunteEntity.getId_asiento() != 0) {
            oApunteEntityFromDatabase.setId_asiento(oApunteEntity.getId_asiento());
        }
        if (oApunteEntity.getId_subcuenta() != 0) {
            oApunteEntityFromDatabase.setId_subcuenta(oApunteEntity.getId_subcuenta());
        }
        if (oApunteEntity.getId_tipoapunte() != 0) {
            oApunteEntityFromDatabase.setId_tipoapunte(oApunteEntity.getId_tipoapunte());
        }
        return oApunteRepository.save(oApunteEntityFromDatabase);
    }

    public Long deleteAll() {
        oApunteRepository.deleteAll();
        return this.count();
    }

}
